import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  onwarn: (warning, handler) => {
    if (warning.filename.includes("node_modules")) return;
    handler(warning);
  },
  preprocess: [
    preprocess({
      scss: {
        prependData: "@import \"src/variables.scss\";",
      },
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      "$lib": "src/lib",
      "$lib/*": "src/lib/*",
      "$components/*": "src/components/*",
      "$data/*": "src/data/*"
    }
  }
};

export default config;
