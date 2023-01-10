import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import Unocss from 'unocss/vite';
import { presetAttributify, presetIcons, presetUno } from 'unocss';
import type { Theme } from '@unocss/preset-mini';
import { presetBetterNestedColors } from 'unocss-preset-better-nested-colors';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@ui': path.resolve(__dirname, './src/lib/ui'),
    },
  },
  plugins: [
    svelte(),
    Unocss({
      safelist: ['hover-icon scale-110'],
      shortcuts: [
        {
          btn: 'px-4 py-1 rounded inline-block bg-primary text-white cursor-pointer tracking-wide op90 hover:op100 disabled:cursor-default disabled:bg-gray-600 disabled:!op50 disabled:pointer-events-none',
          'icon-btn':
            'text-1.2em cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary disabled:pointer-events-none',
          'square-btn':
            'flex flex-gap-2 items-center border border-base px2 py1 relative !outline-none',
          'square-btn-mark':
            'absolute h-2 w-2 bg-primary -right-0.2rem -top-0.2rem',

          'hover-icon': 'hover:scale-110 hover:relative hover:top--2',

          'modal-backdrop':
            'fixed top-0 bottom-0 right-0 left-0 bg-black/[.06]',
        },
        [/^(flex|grid)-center/g, () => 'justify-center items-center'],
        [/^(flex|grid)-x-center/g, () => 'justify-center'],
        [/^(flex|grid)-y-center/g, () => 'items-center'],
      ],
      rules: [
        ['max-h-screen', { 'max-height': 'calc(var(--vh, 1vh) * 100)' }],
        ['h-screen', { height: 'calc(var(--vh, 1vh) * 100)' }],
      ],
      theme: <Theme>{
        colors: {
          ok: 'var(--c-ok)',
          primary: 'var(--c-primary)',
          'primary-deep': 'var(--c-primary-deep)',
          mis: 'var(--c-mis)',
        },
      },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1,
        }),
        presetBetterNestedColors({
          colors: {
            primary: {
              DEFAULT: '#293244', // "primary" => "#eee"
              ':dark': '#222',
            },

            secondary: {
              DEFAULT: '#B89027', // "primary" => "#eee"
              ':dark': '#222',
            },

            accent: {
              DEFAULT: '#B89027', // "primary" => "#eee"
              ':dark': '#222',
            },

            // secondary: {
            // 	DEFAULT: 'rgb(50,50,50)',
            // 	':dark': 'rgb(250,250,250)',

            // 	interactive: {
            // 		DEFAULT: '~', // inheritance "rgb(50,50,50)"
            // 		':dark': '~', // inheritance "rgb(250,250,250)"
            // 		':hover': 'accent' // reference to "accent" => "#f00"
            // 	}
            // },

            // accent: {
            // 	DEFAULT: '#f00',

            // 	interactive: {
            // 		DEFAULT: '~', // inheritance "#f00"
            // 		':hover': {
            // 			DEFAULT: '#ff0',
            // 			':dark': '#f0f'
            // 		},
            // 		':disabled': 'secondary', // reference to "secondary" => "rgb(50,50,50)"
            // 		':disabled:dark': 'secondary:dark' // reference to "secondary" with "dark" variant => "rgb(250,250,250)"
            // 	}
            // },

            // red: {
            // 	DEFAULT: 'red-200', // reference to "red-200" => "#c00"
            // 	100: '#b00',
            // 	200: '#c00',
            // 	300: '#d00',
            // 	400: '#e00'
            // },

            // green: {
            // 	DEFAULT: '#0c0',
            // 	100: '#0b0',
            // 	200: '~', // inheritance "#0c0"
            // 	300: '#0d0',
            // 	400: '#0e0'
            // }
          },
        }),
      ],
    }),
  ],
});
