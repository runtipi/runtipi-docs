"use client";

import { useState } from "react";
import yaml from "js-yaml";

interface DockerComposeVolume {
  source?: string;
  target?: string;
  read_only?: boolean;
  hostPath?: string;
  containerPath?: string;
}

interface DockerComposePortMapping {
  target?: number;
  published?: number;
  protocol?: string;
  containerPort?: number;
  hostPort?: number;
}

interface DockerComposeHealthcheck {
  test: string | string[];
  interval?: string;
  timeout?: string;
  retries?: number;
  start_period?: string;
  start_interval?: string;
}

interface DockerComposeService {
  image?: string;
  container_name?: string;
  command?: string | string[];
  environment?: Record<string, string> | string[];
  ports?: Array<string | DockerComposePortMapping>;
  volumes?: Array<string | DockerComposeVolume>;
  network_mode?: string;
  extra_hosts?: string[] | Record<string, string>;
  hostname?: string;
  healthcheck?: DockerComposeHealthcheck;
  deploy?: Record<string, unknown>;
  ulimits?: Record<string, unknown>;
  shm_size?: string | number;
  privileged?: boolean;
  cap_add?: string[];
  cap_drop?: string[];
  security_opt?: string[];
  read_only?: boolean;
  user?: string;
  entrypoint?: string | string[];
  working_dir?: string;
  tty?: boolean;
  stdin_open?: boolean;
  stop_signal?: string;
  stop_grace_period?: string;
  pid?: string;
  sysctls?: Record<string, string>;
  logging?: Record<string, unknown>;
  devices?: string[] | Record<string, unknown>;
  depends_on?: string[] | string | Record<string, { condition: string }>;
  labels?: Record<string, string>;
}

interface DockerComposeConfig {
  services: Record<string, DockerComposeService>;
}

interface DynamicServiceVolume {
  hostPath: string;
  containerPath: string;
  readOnly: boolean;
  shared: boolean;
  private: boolean;
}

interface DynamicServicePort {
  containerPort: number;
  hostPort: number;
  tcp: boolean;
  udp: boolean;
  interface?: string;
}

interface DynamicServiceHealthCheck {
  test: string;
  interval?: string;
  timeout?: string;
  retries?: number;
  startPeriod?: string;
  startInterval?: string;
}

interface DynamicServiceEnvironment {
  key: string;
  value: string | number | boolean;
}

interface DynamicService {
  name: string;
  image?: string;
  command?: string | string[];
  environment?: DynamicServiceEnvironment[];
  internalPort?: number;
  addPorts?: DynamicServicePort[];
  volumes?: DynamicServiceVolume[];
  networkMode?: string;
  addToMainNetwork?: boolean;
  extraHosts?: string[];
  hostname?: string;
  dns?: string | string[];
  healthCheck?: DynamicServiceHealthCheck;
  deploy?: Record<string, unknown>;
  ulimits?: Record<string, unknown>;
  shmSize?: string | number;
  privileged?: boolean;
  capAdd?: string[];
  capDrop?: string[];
  securityOpt?: string[];
  readOnly?: boolean;
  user?: string;
  entrypoint?: string | string[];
  workingDir?: string;
  tty?: boolean;
  stdinOpen?: boolean;
  stopSignal?: string;
  stopGracePeriod?: string;
  pid?: string;
  sysctls?: Record<string, number>;
  logging?: Record<string, unknown>;
  devices?: string[];
  dependsOn?: string[] | Record<string, { condition: string }>;
  isMain?: boolean;
  extraLabels?: Record<string, string | boolean>;
}

interface DynamicComposeConfig {
  schemaVersion: 2;
  services: DynamicService[];
}

interface DockerComposeConverterProps {
  placeholder?: string;
}

export const DockerComposeConverter = ({
  placeholder,
}: DockerComposeConverterProps) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isConverted, setIsConverted] = useState(false);

  const convertDockerCompose = (value: string) => {
    setInput(value);
    setError(undefined);
    setIsConverted(false);
    setOutput("");

    if (!value) {
      return;
    }

    try {
      const dockerComposeConfig = yaml.load(value) as DockerComposeConfig;

      if (!dockerComposeConfig || typeof dockerComposeConfig !== "object") {
        setError("Invalid docker-compose.yml format");
        return;
      }

      if (
        !dockerComposeConfig.services ||
        typeof dockerComposeConfig.services !== "object"
      ) {
        setError("No services defined in docker-compose.yml");
        return;
      }

      const dynamicConfig = convertToDynamicCompose(dockerComposeConfig);

      setOutput(JSON.stringify(dynamicConfig, null, 2));
      setIsConverted(true);
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      setError(`Error converting docker-compose: ${errorMessage}`);
    }
  };

  const convertToDynamicCompose = (
    dockerCompose: DockerComposeConfig,
  ): DynamicComposeConfig => {
    const services = dockerCompose.services;
    const dynamicServices: DynamicService[] = [];

    for (const serviceName of Object.keys(services)) {
      const service = services[serviceName];
      dynamicServices.push(convertService(serviceName, service));
    }

    return { 
      schemaVersion: 2,
      services: dynamicServices 
    };
  };

  const convertService = (
    serviceName: string,
    service: DockerComposeService,
  ): DynamicService => {
    const dynamicService: DynamicService = {
      name: serviceName,
      image: service.image,
    };

    processBasicProperties();
    processEnvironment();
    processPorts();
    processVolumes();
    processNetworking();
    processHealthCheck();
    processAdvancedConfig();
    processSecurityOptions();
    processDeploymentOptions();
    processDependencies();

    function processBasicProperties() {
      if (service.container_name) dynamicService.name = service.container_name;
      if (service.command) dynamicService.command = service.command;
    }

    function processEnvironment() {
      if (service.environment) {
        dynamicService.environment = [];

        if (Array.isArray(service.environment)) {
          for (const env of service.environment) {
            const [key, value] = env.split("=");
            if (key && value) {
              dynamicService.environment.push({ key, value });
            }
          }
        } else {
          for (const [key, value] of Object.entries(service.environment)) {
            dynamicService.environment.push({ key, value });
          }
        }
      }
    }

    function processPorts() {
      if (!service.ports) return;

      let mainPort: number | null = null;
      const additionalPorts: DynamicServicePort[] = [];

      for (const portMapping of service.ports) {
        const port = parsePortMapping(portMapping);

        if (port) {
          if (!mainPort && port.containerPort) {
            mainPort = port.containerPort;
          } else if (port.containerPort && port.hostPort) {
            additionalPorts.push(port);
          }
        }
      }

      if (mainPort) dynamicService.internalPort = mainPort;
      if (additionalPorts.length > 0) dynamicService.addPorts = additionalPorts;
    }

    function parsePortMapping(
      portMapping: string | DockerComposePortMapping,
    ): DynamicServicePort | null {
      let containerPort: number | undefined;
      let hostPort: number | undefined;
      let tcp = true;
      let udp = false;
      let interface_: string | null = null;

      if (typeof portMapping === "string") {
        const result = parseStringPortMapping(portMapping);
        if (!result) return null;

        containerPort = result.containerPort;
        hostPort = result.hostPort;
        tcp = result.tcp;
        udp = result.udp;
        interface_ = result.interface_ ?? null;
      } else if (typeof portMapping === "object" && portMapping !== null) {
        containerPort = portMapping.target ?? portMapping.containerPort;
        hostPort = portMapping.published ?? portMapping.hostPort;
        const protocol = portMapping.protocol ?? "tcp";
        tcp = protocol === "tcp" || protocol.includes("tcp");
        udp = protocol === "udp" || protocol.includes("udp");
      }

      if (!containerPort) return null;

      const port: DynamicServicePort = {
        containerPort,
        hostPort: hostPort ?? containerPort,
        tcp,
        udp,
      };

      if (interface_) port.interface = interface_;

      return port;
    }

    function parseStringPortMapping(portString: string) {
      const parts = portString.split(":");
      const portProtocolParts = parts[parts.length - 1].split("/");
      let containerPort: number | undefined;
      let hostPort: number | undefined;
      let interface_: string | undefined;

      if (parts.length === 1) {
        containerPort = Number.parseInt(portProtocolParts[0], 10);
        hostPort = containerPort;
      } else if (parts.length === 2) {
        hostPort = Number.parseInt(parts[0], 10);
        containerPort = Number.parseInt(portProtocolParts[0], 10);
      } else if (parts.length === 3) {
        interface_ = parts[0];
        hostPort = Number.parseInt(parts[1], 10);
        containerPort = Number.parseInt(portProtocolParts[0], 10);
      }

      if (containerPort === undefined || Number.isNaN(containerPort))
        return null;

      let tcp = true;
      let udp = false;

      if (portProtocolParts.length > 1) {
        const protocol = portProtocolParts[1].toLowerCase();
        tcp = protocol === "tcp" || protocol.includes("tcp");
        udp = protocol === "udp" || protocol.includes("udp");
      }

      return { containerPort, hostPort, tcp, udp, interface_ };
    }

    function processVolumes() {
      if (!service.volumes) return;

      const volumes = service.volumes
        .map((volume) => parseVolumeMapping(volume))
        .filter((vol): vol is DynamicServiceVolume => vol !== null);

      if (volumes.length > 0) dynamicService.volumes = volumes;
    }

    function parseVolumeMapping(
      volume: string | DockerComposeVolume,
    ): DynamicServiceVolume | null {
      if (typeof volume === "string") {
        return parseStringVolume(volume);
      }

      return parseObjectVolume(volume);
    }

    function parseStringVolume(
      volumeString: string,
    ): DynamicServiceVolume | null {
      const parts = volumeString.split(":");
      let hostPath: string | undefined;
      let containerPath: string | undefined;
      let readOnly = false;

      if (parts.length === 1) {
        hostPath = parts[0];
        containerPath = parts[0];
      } else if (parts.length >= 2) {
        hostPath = parts[0];
        containerPath = parts[1];

        if (parts.length === 3 && parts[2] === "ro") {
          readOnly = true;
        }
      }

      if (hostPath && containerPath) {
        return {
          hostPath,
          containerPath,
          readOnly,
          shared: false,
          private: false,
        };
      }

      return null;
    }

    function parseObjectVolume(
      volume: DockerComposeVolume,
    ): DynamicServiceVolume | null {
      const hostPath = volume.source ?? volume.hostPath;
      const containerPath = volume.target ?? volume.containerPath;

      if (hostPath && containerPath) {
        return {
          hostPath,
          containerPath,
          readOnly: volume.read_only ?? false,
          shared: false,
          private: false,
        };
      }

      return null;
    }

    function processNetworking() {
      if (service.network_mode)
        dynamicService.networkMode = service.network_mode;
      if (service.extra_hosts) {
        if (Array.isArray(service.extra_hosts)) {
          dynamicService.extraHosts = service.extra_hosts;
        } else {
          // Convert object format to array format
          dynamicService.extraHosts = Object.entries(service.extra_hosts).map(
            ([host, ip]) => `${host}:${ip}`
          );
        }
      }
      if (service.hostname) dynamicService.hostname = service.hostname;
    }

    function processHealthCheck() {
      if (service.healthcheck) {
        dynamicService.healthCheck = {
          test: Array.isArray(service.healthcheck.test)
            ? (() => {
                const testArray = [...service.healthcheck.test];
                if (testArray.length > 0 && testArray[0] === "CMD-SHELL") {
                  testArray.shift();
                }
                return testArray.join(" ");
              })()
            : service.healthcheck.test,
          interval: service.healthcheck.interval,
          timeout: service.healthcheck.timeout,
          retries: service.healthcheck.retries,
          startPeriod: service.healthcheck.start_period,
          startInterval: service.healthcheck.start_interval,
        };
      }
    }

    function processAdvancedConfig() {
      if (service.entrypoint) dynamicService.entrypoint = service.entrypoint;
      if (service.working_dir) dynamicService.workingDir = service.working_dir;
      if (service.tty) dynamicService.tty = service.tty;
      if (service.stdin_open) dynamicService.stdinOpen = service.stdin_open;
      if (service.stop_signal) dynamicService.stopSignal = service.stop_signal;
      if (service.stop_grace_period)
        dynamicService.stopGracePeriod = service.stop_grace_period;
      if (service.pid) dynamicService.pid = service.pid;
      
      // Convert sysctls values from string to number
      if (service.sysctls) {
        dynamicService.sysctls = {};
        for (const [key, value] of Object.entries(service.sysctls)) {
          const numValue = typeof value === 'string' ? Number.parseInt(value, 10) : value;
          if (!Number.isNaN(numValue)) {
            dynamicService.sysctls[key] = numValue;
          }
        }
      }
      
      if (service.logging) dynamicService.logging = service.logging;
      
      // Only process devices if it's a string array
      if (service.devices && Array.isArray(service.devices)) {
        dynamicService.devices = service.devices;
      }
    }

    function processSecurityOptions() {
      if (service.privileged) dynamicService.privileged = service.privileged;
      if (service.cap_add) dynamicService.capAdd = service.cap_add;
      if (service.cap_drop) dynamicService.capDrop = service.cap_drop;
      if (service.security_opt)
        dynamicService.securityOpt = service.security_opt;
      if (service.read_only) dynamicService.readOnly = service.read_only;
      if (service.user) dynamicService.user = service.user;
    }

    function processDeploymentOptions() {
      if (service.deploy) dynamicService.deploy = service.deploy;
      if (service.ulimits) dynamicService.ulimits = service.ulimits;
      if (service.shm_size) dynamicService.shmSize = service.shm_size;
    }

    function processDependencies() {
      if (service.depends_on) {
        if (
          typeof service.depends_on === "object" &&
          !Array.isArray(service.depends_on)
        ) {
          // Keep as object format with conditions
          dynamicService.dependsOn = service.depends_on as Record<
            string,
            { condition: string }
          >;
        } else if (Array.isArray(service.depends_on)) {
          // Keep as array format (preferred for simple dependencies)
          dynamicService.dependsOn = service.depends_on.filter(
            (dep): dep is string => typeof dep === "string"
          );
        } else if (typeof service.depends_on === "string") {
          dynamicService.dependsOn = [service.depends_on];
        }
      }

      if (
        service.labels &&
        Object.keys(service.labels).some((key) => key.startsWith("traefik"))
      ) {
        dynamicService.isMain = true;
      }
      
      // Process extraLabels (non-traefik labels)
      if (service.labels) {
        const nonTraefikLabels = Object.entries(service.labels).filter(
          ([key]) => !key.startsWith("traefik")
        );
        if (nonTraefikLabels.length > 0) {
          dynamicService.extraLabels = Object.fromEntries(nonTraefikLabels);
        }
      }
    }

    return dynamicService;
  };

  return (
    <div className="w-full space-y-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Docker Compose YAML</h3>
          <textarea
            className="min-h-[300px] w-full rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder ?? "Paste your docker-compose.yml here..."}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Dynamic Compose Output</h3>
          <textarea
            className="min-h-[300px] w-full rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900"
            value={output}
            readOnly
            placeholder="Converted dynamic compose will appear here..."
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => convertDockerCompose(input)}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-800 dark:hover:bg-blue-700"
        >
          Convert
        </button>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
          <pre className="whitespace-pre-wrap">{error}</pre>
        </div>
      )}

      {isConverted && (
        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
          Docker Compose successfully converted! Remember to validate your
          configuration using the validator above.
        </div>
      )}
    </div>
  );
};
