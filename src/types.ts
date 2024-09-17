export type socials = {
	name: string;
	href: string;
	icon: React.ReactNode;
}[];

export type about = {
	about: string;
	current?: string;
	tooling: {
		languages: {
			name: string;
		}[];
		frontend: {
			name: string;
		}[];
		backend: {
			name: string;
		}[];
		rpa: {
			name: string;
			image?: string;
		}[];
	};
};

export type exp = {
	role: string;
	company: string;
	duration: string;
	href: string;
	tech: string[];
	description: string[];
}[];
