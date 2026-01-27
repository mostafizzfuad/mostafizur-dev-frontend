// জেনেরিক স্ট্র্যাপাই রেসপন্স টাইপ
export type StrapiResponse<T> = {
	data: T[];
};

// স্ট্র্যাপাই থেকে আসা র' প্রজেক্ট ডেটা
export type StrapiProject = {
	id: number;
	documentId: string;
	title: string;
	description: string;
	image?: {
		url: string;
		formats?: {
			thumbnail?: { url: string };
			small?: { url: string };
			medium?: { url: string };
			large?: { url: string };
		};
	};
	url: string;
	date: string;
	category: string;
	featured: boolean;
};

export type Project = {
	id: number;
	documentId: string;
	title: string;
	description: string;
	image: string;
	url: string;
	date: string;
	category: string;
	featured: boolean;
};

export type PostMeta = {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	date: string;
};
