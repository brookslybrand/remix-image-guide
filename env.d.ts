/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

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
