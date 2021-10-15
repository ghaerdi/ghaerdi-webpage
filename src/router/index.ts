import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/index.vue";
import Projects from "../views/projects.vue";
import NotFound from "../views/error.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/projects",
		name: "Projects",
		component: Projects,
	},
	{
		path: "/:catchAll(.*)",
		name: "404",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
