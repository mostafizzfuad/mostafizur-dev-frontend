import { Outlet } from "react-router";
import Hero from "../../components/Hero"; // অথবা '~/components/Hero' যদি এলিয়াস সেট করা থাকে

const HomeLayout = () => {
	return (
		<>
			{/* ১. হিরো সেকশন ফুল উইডথ হবে */}
			<Hero name="Mostafizur" />

			{/* ২. বাকি কন্টেন্ট (Outlet) কন্টেইনারের ভেতরে থাকবে */}
			<section className="max-w-6xl mx-auto px-6 my-8">
				<Outlet />
			</section>
		</>
	);
};

export default HomeLayout;
