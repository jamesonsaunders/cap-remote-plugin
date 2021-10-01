import { WebPlugin } from '@capacitor/core';

import type { CapRemotePluginPlugin } from './definitions';

export class CapRemotePluginWeb extends WebPlugin implements CapRemotePluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
