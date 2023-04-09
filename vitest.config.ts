import Vue from "@vitejs/plugin-vue";
import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  plugins: [Vue()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.ts"],
  },
});
