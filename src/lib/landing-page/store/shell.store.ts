import { writable } from 'svelte/store';

const store = writable(false);

const updateMenuOpen = (isOpen: boolean) => {
  store.update((n) => isOpen);
};

export const ShellStore = {
  menuOpen: store,
  updateMenuOpen,
};
