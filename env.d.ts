declare module "virtual:remix/server-build" {
  import { ServerBuild } from "@remix-run/node";
  export const routes: ServerBuild["routes"];
}

// taken from https://github.com/JonasKruckenberg/imagetools/issues/160#issuecomment-1009292026
declare module "*&imagetools" {
  /**
   * actual types
   * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
   * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
   */
  const out;
  export default out;
}
