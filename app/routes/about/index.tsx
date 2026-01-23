const AboutPage = () => {
	return (
		<div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
			{/* Intro Section */}
			<div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
				<img
					src="/images/profile.png"
					alt="Profile"
					className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
				/>
				<div>
					<h1 className="text-3xl font-bold text-white mb-2">
						Hey, I'm Mostafizur 👋
					</h1>
					<p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
						{/* I'm a passionate web developer and content creator who
						loves building friendly digital experiences and helping
						others grow into confident, modern developers.  */}
						I'm a passionate Full Stack Developer who loves building
						friendly digital experiences and scalable web
						applications using
						<span className="text-blue-400 font-semibold">
							{" "}
							PERN, MERN, TanStack{" "}
						</span>
						and modern technologies.
					</p>
				</div>
			</div>

			{/* Bio / Mission Section */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-4">
					My Mission
				</h2>
				<p className="text-gray-300 leading-relaxed">
					After turning my life around, I made it my mission to share
					what I’ve learned with others — not just about code, but
					about building a life you’re proud of. Through tutorials,
					courses, and real-world projects, I aim to make development
					accessible, friendly, and something you look forward to each
					day.
				</p>
			</div>

			{/* Tech Stack List */}
			<div>
				<h2 className="text-2xl font-semibold text-white mb-4">
					🚀 Tech I Use
				</h2>
				<ul className="flex flex-wrap gap-4 text-sm text-gray-300">
					{[
						"Next.js",
						"React.js",
						"TypeScript",
						"JavaScript",
						"Tailwind CSS",
						"Node.js",
						"Express.js",
						"MongoDB",
						"Mongoose",
						"PostgreSQL",
						"Prisma",
						"HTML",
						"CSS",
					].map((tech) => (
						<li
							key={tech}
							className="bg-gray-700 px-3 py-1 rounded-md"
						>
							{tech}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AboutPage;
