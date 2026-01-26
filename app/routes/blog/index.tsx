import { useState } from "react";
import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader({
	request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
	const url = new URL("/posts-meta.json", request.url);
	const res = await fetch(url.href);

	if (!res.ok) {
		throw new Error("Failed to fetch posts");
	}

	const data: PostMeta[] = await res.json();

	// ডেট অনুযায়ী সর্ট করা (Newest First)
	data.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
	const { posts } = loaderData;

	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 3;

	// ফিল্টারিং লজিক
	const filteredPosts = posts.filter((post) => {
		const query = searchQuery.toLowerCase();
		return (
			post.title.toLowerCase().includes(query) ||
			post.excerpt.toLowerCase().includes(query)
		);
	});

	// ক্যালকুলেশন
	const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
	const indexOfLast = currentPage * postsPerPage;
	const indexOfFirst = indexOfLast - postsPerPage;
	const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

	return (
		<section className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
			<h2 className="text-3xl font-bold mb-8 text-white">📝 Blog</h2>

			{/* ফিল্টার কম্পোনেন্ট */}
			<PostFilter
				searchQuery={searchQuery}
				onSearchChange={(query) => {
					setSearchQuery(query);
					setCurrentPage(1); // সার্চ করার সময় পেজ ১-এ রিসেট হবে
				}}
			/>

			{/* পোস্ট লিস্ট বা নট ফাউন্ড মেসেজ */}
			<div className="space-y-8">
				{currentPosts.length === 0 ? (
					<p className="text-gray-400 text-center py-8">
						No posts found matching your search.
					</p>
				) : (
					currentPosts.map((post) => (
						<PostCard key={post.slug} post={post} />
					))
				)}
			</div>

			{/* পেজিনেশন কম্পোনেন্ট */}
			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			)}
		</section>
	);
};

export default BlogPage;
