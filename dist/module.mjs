import { defineNuxtModule, createResolver, addComponentsDir, addPlugin } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@humaidem/nuxt-awesome-modal",
    configKey: "awesomeModal"
  },
  defaults: {},
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url);
    nuxt.options.alias["#awesomeModal"] = resolver.resolve("./runtime");
    nuxt.options.build.transpile.push(resolver.resolve("./runtime"));
    addComponentsDir({
      path: resolver.resolve("./runtime/components")
    });
    addPlugin(resolver.resolve("./runtime/plugin"));
    nuxt.hook("imports:dirs", (dirs) => {
      dirs.push(resolver.resolve("./runtime/composables"));
    });
  }
});

export { module as default };
