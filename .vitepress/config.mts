import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
// @ts-ignore: not sure how to manage this typing business
import markdownItTaskLists from "markdown-it-task-lists";

export default defineConfig({
	title: "bar chucho [BoH]",
	description: "protocol, recipes, and history of bar chucho",
	cleanUrls: true,
	markdown: {
		config: (md) => {
			md.use(markdownItTaskLists);
		}
	},
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["link", { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" }],
		["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
		["link", { rel: "shortcut icon", href: "/favicon.ico" }],
	],
	themeConfig: {
		search: {
			provider: "local",
			options: {
				_render(src, env, md) {
					const html = md.render(src, env);
					if (env.frontmatter?.title)
						return md.render(`# ${env.frontmatter.title}`) + html;
					return html;
				},
			},
		},
		sidebar: {
			"/floor": {
				base: "/floor/",
				items: [
					{ text: "opening checklist", link: "opening" },
					{ text: "closing checklist", link: "closing" },
				],
			},
			"/kitchen": {
				base: "/kitchen/",
				items: [{ text: "menu", link: "menu" }],
			},
			"/bar": {
				base: "/bar/",
				items: [
					{ text: "recipes", link: "recipes" },
					{ text: "batches", link: "batches" },
					{ text: "builds", link: "builds" },
					{ text: "experiments", link: "experiments" },
					{ text: "doh checklist", link: "checklists/doh" },
					{ text: "opening checklist", link: "checklists/opening" },
					{ text: "closing checklist", link: "checklists/closing" },
				],
			},
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
