import type { AttributifyAttributes } from '@unocss/preset-attributify';
import { IconCard } from './lib/ui/types';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
  IconCard;
}

// export interface IIconCard {
// 	title: string;
// 	tagline: string;
// }

declare global {
  namespace svelte.JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}
