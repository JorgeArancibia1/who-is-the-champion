import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        lang: 'es-ES',
        name: "who-is-the-champion",
        short_name: "WChampion",
        description: "Who is the champion is a web app to know who is the champion in a tournament",
        theme_color: '#19223c',
        background_color: '#d4d4d4',
        icons: [
          {
            src: '/assets/icons/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/assets/icons/pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '/assets/icons/pelota.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/assets/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/assets/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      }
    })
  ],
  base: 'https://wchampion.netlify.app/',
})
