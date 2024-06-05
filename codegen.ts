import type { CodegenConfig } from "@graphql-codegen/cli";

import { environment } from "src/environments/environment";

const config: CodegenConfig = {
  schema: environment.GRAPHQL_URL || "http://localhost:3000/graphql",
  generates: {
    "./src/modules/graphql/graphql.inteface.ts": {
      config: { skipGraphQLImport: true, skipDocumentsValidation: { skipValidationAgainstSchema: true } },
      plugins: ["typescript", "typescript-operations", "typescript-apollo-angular"],
    },
  },
};
export default config;
