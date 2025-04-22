"use client";

import { useState } from "react";
import Ajv from "ajv";
import betterAjvErrors from "better-ajv-errors";

interface JsonSchemaValidatorProps {
  schema: object;
  placeholder?: string;
}

export const JsonSchemaValidator = ({
  schema,
  placeholder,
}: JsonSchemaValidatorProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isValid, setIsValid] = useState(false);

  const validateInput = (value: string) => {
    setInput(value);
    if (!value) {
      setError(undefined);
      setIsValid(false);
      return;
    }

    try {
      const parsedValue = JSON.parse(value);
      const ajv = new Ajv({ allErrors: true });
      const validate = ajv.compile(schema);
      const valid = validate(parsedValue);

      if (valid) {
        setError(undefined);
        setIsValid(true);
      } else {
        console.log(validate.errors);
        const formattedErrors = betterAjvErrors(
          schema,
          parsedValue,
          validate.errors,
          { format: "cli", indent: 2 },
        );
        setError(formattedErrors);
        setIsValid(false);
      }
    } catch (e) {
      setError("Invalid JSON format");
      setIsValid(false);
    }
  };

  return (
    <div className="w-full space-y-2">
      <textarea
        className="min-h-[200px] w-full rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-sm dark:border-gray-800 dark:bg-gray-900"
        value={input}
        onChange={(e) => validateInput(e.target.value)}
        placeholder={placeholder || "Paste your JSON configuration here..."}
      />
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
          <pre className="whitespace-pre-wrap">{error}</pre>
        </div>
      )}
      {isValid && (
        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
          Configuration is valid!
        </div>
      )}
    </div>
  );
};
