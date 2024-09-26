import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            tag === "Chartjs";
          },
        },
      },
    }),
    vueJsx(),
    AutoImport({
      // 在哪些檔案裡可以直接引入
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // 需要自動匯入的插件，自訂匯入的API
      imports: [
        "vue",
        "vue-i18n",
        "vue-router",
        "pinia",
        {
          "@/dayjsSetup": [["default", "dayjs"]],
          lodash: [["default", "_"]],
        },
      ],
      dts: "./src/types/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: "./src/types/components.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
});
