import { Plugin } from '@capacitor/core';

export interface CapRemotePluginPlugin extends Plugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
