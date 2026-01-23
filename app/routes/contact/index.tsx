import type { Route } from "./+types/index";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs) {
	// রিকোয়েস্ট থেকে ফর্ম ডেটা বের করা
	const formData = await request.formData();

	// ইনপুট ভ্যালুগুলো নেওয়া
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const subject = formData.get("subject") as string;
	const message = formData.get("message") as string;

	// ১. এরর অবজেক্ট ইনিশিয়ালাইজ করা
	const errors: Record<string, string> = {};

	// ২. ভ্যালিডেশন চেক
	if (!name) errors.name = "Name is required.";

	if (!email) {
		errors.email = "Email is required.";
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		// Regex দিয়ে ইমেইল ফরম্যাট চেক
		errors.email = "Invalid email format.";
	}

	if (!subject) errors.subject = "Subject is required.";

	if (!message) {
		errors.message = "Message is required.";
	}

	// ৩. যদি কোনো এরর থাকে, তবে সেগুলো রিটার্ন করো
	if (Object.keys(errors).length > 0) {
		return { errors };
	}

	// ভ্যালিডেশন পাস করলে সাকসেস মেসেজ ও ডেটা রিটার্ন করো
	const data = {
		name,
		email,
		subject,
		message,
	};
	return { message: "Form submitted successfully!", data };
}

// actionData প্রপ রিসিভ করা হচ্ছে
const ContactPage = ({ actionData }: Route.ComponentProps) => {
	// actionData থেকে এরর বের করা হচ্ছে (না থাকলে খালি অবজেক্ট)
	const errors = actionData?.errors || {};

	return (
		<section className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
			<h2 className="text-3xl font-bold text-white mb-8 text-center">
				📬 Contact Me
			</h2>

			{/* ১. সাকসেস মেসেজ দেখানো (যদি actionData থাকে) */}
			{actionData?.message ? (
				<p className="mb-6 p-4 bg-green-900 text-green-100 text-center rounded-lg border border-green-700 shadow-sm">
					{actionData.message}
				</p>
			) : null}

			{/* ২. Form কম্পোনেন্ট ব্যবহার (method='post') */}
			<Form method="post" className="space-y-6">
				{/* Full Name */}
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-300"
					>
						Full Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
					/>
					{/* নাম এরর মেসেজ */}
					{errors.name && (
						<p className="text-red-400 text-sm mt-1">
							{errors.name}
						</p>
					)}
				</div>

				{/* Email */}
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-300"
					>
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
					/>
					{/* ইমেইল এরর মেসেজ */}
					{errors.email && (
						<p className="text-red-400 text-sm mt-1">
							{errors.email}
						</p>
					)}
				</div>

				{/* Subject */}
				<div>
					<label
						htmlFor="subject"
						className="block text-sm font-medium text-gray-300"
					>
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
					/>
					{/* সাবজেক্ট এরর মেসেজ */}
					{errors.subject && (
						<p className="text-red-400 text-sm mt-1">
							{errors.subject}
						</p>
					)}
				</div>

				{/* Message */}
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-300"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows={5}
						className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
					/>
					{/* মেসেজ এরর */}
					{errors.message && (
						<p className="text-red-400 text-sm mt-1">
							{errors.message}
						</p>
					)}
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
				>
					Send Message
				</button>
			</Form>
		</section>
	);
};

export default ContactPage;
