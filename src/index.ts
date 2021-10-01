import { registerPlugin } from '@capacitor/core';

import type { CapRemotePluginPlugin } from './definitions';

const CapRemotePlugin = registerPlugin<CapRemotePluginPlugin>('CapRemotePlugin', {
  web: () => import('./web').then(m => new m.CapRemotePluginWeb()),
});

export * from './definitions';
export { CapRemotePlugin };
