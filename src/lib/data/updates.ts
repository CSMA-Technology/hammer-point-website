type Post = {
	title: string;
	description: string;
	image?: string;
};
export const pinnedPosts: Post[] = [];
export const updatePosts: Post[] = [
	{
		title: 'Canal 90 Restoration Completed!',
		image: (await import('$lib/assets/updates/canal/IMG_0145.jpg')).default,
		description:
			'The Canal restoration project has been completed and all streets are now reopened. Thank you for your patience during the project.'
	}
];
