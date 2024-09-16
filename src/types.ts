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
			icon: React.ReactNode;
		}[];
		library: {
			name: string;
			icon: React.ReactNode;
		}[];
		tools: {
			name: string;
			icon: React.ReactNode;
		}[];
		rpa: {
			name: string;
			image?: string;
		}[];
	};
};
