import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				display: "standalone",
				display_override: ["window-controls-overlay"],
				lang: "es-ES",
				name: "who-is-the-champion",
				short_name: "WChampion",
				description:
					"Who is the champion is a web app to know who is the champion in a tournament",
				theme_color: "#19223c",
				background_color: "#d4d4d4",
				icons: [
					{
						src: "public/64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "/assets/128.png",
						sizes: "128x128",
						type: "image/png",
					},
					{
						src: "src/assets/144x144.jpeg",
						sizes: "144x144",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "/assets/pwa-192x192.png",
						sizes: "1300×1390",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "/assets/pwa-512x512.png",
						sizes: "1300×1390",
						type: "image/png",
						purpose: "maskable",
					},
				],
				screenshots: [
					{
						src: "./src/assets/Desktop.png",
						sizes: "2872 × 1534",
						type: "image/png",
            form_factor: "wide",
					},
					{
						src: "./src/assets/Mobile.png",
						sizes: "720x1280",
						type: "image/png",
					},
				],
			},
		}),
	],
	base: "https://wchampion.netlify.app/",
});
