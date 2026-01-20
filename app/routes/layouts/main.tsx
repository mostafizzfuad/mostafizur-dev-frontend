import { Outlet } from "react-router";

const MainLayout = () => {
	return (
		// সব পেজের জন্য সাধারণ কন্টেইনার
		<section className="max-w-6xl mx-auto px-6 my-8">
			<Outlet />
		</section>
	);
};

export default MainLayout;
