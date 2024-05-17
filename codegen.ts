import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  generates: {
    "./src/modules/graphql/graphql.inteface.ts": {
      config: { skipGraphQLImport: true, skipDocumentsValidation: { skipValidationAgainstSchema: true } },
      plugins: ["typescript", "typescript-operations", "typescript-apollo-angular"],
    },
  },
};
export default config;
