import { Link } from "react-router";

const AboutPreview = () => {
	return (
		<section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
			<img
				src="/images/profile.png"
				alt="profile"
				className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
			/>
			<div>
				<h2 className="text-2xl font-bold text-white mb-2">
					👋 About Me
				</h2>
				<p className="text-gray-300 mb-4 max-w-3xl">
					{/* I’m Mostafizur — a self-taught developer and educator passionate
					about building friendly digital experiences and helping
					others grow into confident modern devs.  */}
					I'm Mostafizur - a passionate Full Stack Developer building
					scalable web applications and seamless digital experiences
					using
					<span className="text-blue-400 font-semibold">
						{" "}
						PERN, MERN, TanStack{" "}
					</span>
					and modern technologies.
				</p>
				<Link
					to="/about"
					className="inline-block text-blue-400 hover:underline text-sm"
				>
					Learn more about me →
				</Link>
			</div>
		</section>
	);
};

export default AboutPreview;
