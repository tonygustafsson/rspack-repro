import { loadEnv } from "@rsbuild/core";
import { defineConfig } from "@rsbuild/core";

const { publicVars } = loadEnv({
  prefixes: ["REACT_APP_"],
});

export default defineConfig({
  source: {
    define: publicVars,
  },
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
});
