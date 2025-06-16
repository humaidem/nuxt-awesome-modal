import {
  addComponentsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@humaidem/nuxt-awesome-modal',
    configKey: 'awesomeModal',
  },
  defaults: {},
  setup(_, nuxt) {
    // setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Transpile and alias runtime
    nuxt.options.alias['#awesomeModal'] = resolver.resolve('./runtime');
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'));

    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
    });
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'));

    nuxt.hook('imports:dirs', dirs => {
      dirs.push(resolver.resolve('./runtime/composables'));
    });
  },
});
