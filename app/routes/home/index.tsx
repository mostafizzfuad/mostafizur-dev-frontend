import Hero from "../../components/Hero";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Mostafizur's Portfolio" },
		{
			name: "description",
			content: "Frontend, Backend and Full Stack Projects",
		},
	];
}

const HomePage = () => {
	return (
		<>
			<Hero name="Mostafizur" />
		</>
	);
};

export default HomePage;
