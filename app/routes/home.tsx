import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Mostafizur's Portfolio" },
		{
			name: "description",
			content: "Frontend, Backend and Full Stack Projects",
		},
	];
}

export default function Home() {
	return <div>My App</div>;
}
