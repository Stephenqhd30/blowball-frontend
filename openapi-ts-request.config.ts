import type { GenerateServiceProps } from "openapi-ts-request";

export default {
	requestLibPath: "import request from '../request.ts'",
	schemaPath: "http://localhost:8080/api/v2/api-docs",
	serversPath: "./src/api",
} as GenerateServiceProps;
