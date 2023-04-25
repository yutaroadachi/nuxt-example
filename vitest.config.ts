import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.ts"],
  },
});
