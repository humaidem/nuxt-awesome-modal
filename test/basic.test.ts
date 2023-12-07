import {$fetch, setup} from '@nuxt/test-utils';
// eslint-disable-next-line import/order
import {fileURLToPath} from 'node:url';
import {describe, expect, it} from 'vitest';

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  });

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/');
    expect(html).toContain('<div>basic</div>');
  });
});
