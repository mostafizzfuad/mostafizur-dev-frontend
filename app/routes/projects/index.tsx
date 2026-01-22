import { useState } from "react";
import type { Project } from "~/types";
import type { Route } from "./+types";
import ProjectCard from "~/components/project-card";
import Pagination from "~/components/Pagination";

// Loader ফাংশন (সার্ভার সাইডে রান হবে)
export async function loader({
	request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
	const res = await fetch("http://localhost:8000/projects");
	const data = await res.json();
	return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
	const { projects } = loaderData;
	// console.log(projects);

	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6; // আপাতত ৬ রাখছি যাতে লেআউট সুন্দর দেখায়

	// মোট পেজ সংখ্যা বের করা (Math.ceil ব্যবহার করা হয়েছে যাতে পূর্ণসংখ্যা পাওয়া যায়)
	const totalPages = Math.ceil(projects.length / projectsPerPage);

	// বর্তমান পেজের প্রজেক্ট বের করা
	const indexOfLast = currentPage * projectsPerPage;
	const indexOfFirst = indexOfLast - projectsPerPage;
	const currentProjects = projects.slice(indexOfFirst, indexOfLast);

	return (
		<>
			<h2 className="text-3xl font-bold mb-8 text-white">🚀 Projects</h2>

			<div className="grid gap-6 sm:grid-cols-2">
				{currentProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={setCurrentPage}
			/>
		</>
	);
};

export default ProjectsPage;
