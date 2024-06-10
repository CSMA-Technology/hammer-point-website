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
			'The Canal restoration project is almost done! After a failed inspection, workers will be returning on the week of June 10th to finish the job.'
	}
];
