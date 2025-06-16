
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['awesomeModal']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['awesomeModal']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['awesomeModal']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['awesomeModal']?: ModuleOptions }
}


export { ModuleOptions, default } from './module'
