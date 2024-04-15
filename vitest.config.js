import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    passWithNoTests: true,
    reporters: ["junit", "verbose"],
    outputFile: "./test-output.xml",
  },
});
