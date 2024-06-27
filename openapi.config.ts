const { generateService } = require('@umijs/openapi')

generateService({
  requestLibPath: "import request from '../../request.ts'",
  schemaPath: "http://localhost:8080/api/v2/api-docs",
  serversPath: "./src",
});

