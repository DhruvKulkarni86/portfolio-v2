export type socials = {
	name: string;
	href: string;
	icon: React.ReactNode;
}[];

export type about = {
	about: string;
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
