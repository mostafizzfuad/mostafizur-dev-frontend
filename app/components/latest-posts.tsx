import { Link } from "react-router";
import type { PostMeta } from "~/types";

type LatestPostsProps = {
	posts: PostMeta[];
	limit?: number; // অপশনাল, ডিফল্ট ৩
};

const LatestPosts = ({ posts, limit = 3 }: LatestPostsProps) => {
	// ১. তারিখ অনুযায়ী সর্ট করা (Newest First)
	const sorted = [...posts].sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	// ২. লিমিট অনুযায়ী স্লাইস করা
	const latest = sorted.slice(0, limit);

	return (
		<section className="max-w-6xl mx-auto py-12">
			<h2 className="text-2xl font-bold mb-6 text-white">
				🆕 Latest Posts
			</h2>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{latest.map((post) => (
					<Link
						key={post.slug}
						to={`/blog/${post.slug}`}
						className="block p-4 border border-gray-700 rounded-lg bg-gray-800 hover:shadow-md transition group"
					>
						<h3 className="text-lg font-semibold text-blue-400 mb-1 group-hover:text-blue-300">
							{post.title}
						</h3>
						<p className="text-sm text-gray-300 line-clamp-2">
							{post.excerpt}
						</p>
						<span className="block mt-3 text-xs text-gray-500">
							{new Date(post.date).toLocaleDateString()}
						</span>
					</Link>
				))}
			</div>
		</section>
	);
};

export default LatestPosts;
