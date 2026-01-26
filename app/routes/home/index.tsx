import type { Route } from "./+types/index";
import type { Project, PostMeta } from "~/types";
import FeaturedProjects from "~/components/featured-projects";
import AboutPreview from "~/components/about-preview";
import LatestPosts from "~/components/latest-posts";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Mostafizur's Portfolio" },
		{
			name: "description",
			content: "Frontend, Backend and Full Stack Projects",
		},
	];
}

// লোডার দিয়ে ডেটা ফেচিং
export async function loader({
	request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
	// প্যারালাল ডেটা ফেচিং
	const [projectRes, postRes] = await Promise.all([
		fetch(`${import.meta.env.VITE_API_URL}/projects`),
		fetch(new URL("/posts-meta.json", request.url)),
	]);

	if (!projectRes.ok || !postRes.ok) {
		throw new Error("Failed to fetch projects or posts");
	}

	const [projects, posts]: [Project[], PostMeta[]] = await Promise.all([
		projectRes.json(),
		postRes.json(),
	]);

	return { projects, posts };
}

// কম্পোনেন্টে ডেটা পাস করা
const HomePage = ({ loaderData }: Route.ComponentProps) => {
	const { projects, posts } = loaderData;

	return (
		<>
			<FeaturedProjects projects={projects} count={2} />
			<AboutPreview />
			<LatestPosts posts={posts} limit={3} />
		</>
	);
};

export default HomePage;
