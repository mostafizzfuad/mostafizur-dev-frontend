interface PaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({
	totalPages,
	currentPage,
	onPageChange,
}: PaginationProps) => {
	// যদি ১টি মাত্র পেজ থাকে, তবে পেজিনেশন দেখানোর দরকার নেই
	if (totalPages <= 1) return null;
    
	return (
		<div className="flex justify-center gap-2 mt-8">
			{/* Array.from দিয়ে আমরা ডায়নামিক বাটন তৈরি করছি */}
			{Array.from({ length: totalPages }, (_, idx) => (
				<button
					key={idx + 1}
					onClick={() => onPageChange(idx + 1)}
					className={`px-3 py-1 cursor-pointer rounded ${
						currentPage === idx + 1
							? "bg-blue-600 text-white" // একটিভ পেজ স্টাইল
							: "bg-gray-700 text-gray-200"
					}`}
				>
					{idx + 1}
				</button>
			))}
		</div>
	);
};

export default Pagination;
