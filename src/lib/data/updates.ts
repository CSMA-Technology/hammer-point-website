import canalVideo from '$lib/assets/updates/canal/Canal_Work.mp4';
import beautificationSign from '$lib/assets/updates/beautification/new-sign.jpg';
type Post = {
	title: string;
	description: string;
	image?: string;
	video?: {
		src: string;
		poster?: string;
		linkText: string;
	};
	details?: {
		src: string;
		linkText: string;
		linkOpenInNewTab?: boolean;
	};
};
export const pinnedPosts: Post[] = [
	{
		title: "4th of July Fireworks at Founder's Park",
		image: (await import('$lib/assets/updates/fireworks/founders-park-fireworks-2024.jpg')).default,
		description:
			"Celebrate the 4th of July at Founder's Park with a fireworks show! The event is from 6-10PM. For more information, click the link below.",
		details: {
			src: 'https://islamoradachamber.com/happenings/#!event/2024/7/4/family-fun-food-fireworks',
			linkText: 'Click here for more details',
			linkOpenInNewTab: true
		}
	},
	{
		title: 'Key Largo 4th of July Parade',
		image: (await import('$lib/assets/updates/fireworks/key-largo-parade-2024.jpg')).default,
		description:
			"This free event begins at 10AM with a parade at MM98, and continues with a fireworks show at Rowell's Waterfront Park at 9:15PM.",
		details: {
			src: 'https://www.facebook.com/photo/?fbid=498416729389688&set=a.179564141274950',
			linkText: 'Click here for more details',
			linkOpenInNewTab: true
		}
	}
];
export const updatePosts: Post[] = [
	{
		title: 'Beautification Project Underway',
		description:
			'The first phase of the Beautification project for the Front Entrance is finally underway! Several improvements will be made to the entrance, including new landscaping and a new sign.',
		image: beautificationSign,
		details: {
			src: '/updates/detail/beautification-project',
			linkText: 'To read the full details, click here'
		}
	},
	{
		title: 'Canal 90 Restoration Completed',
		image: (await import('$lib/assets/updates/canal/IMG_0145.jpg')).default,
		description:
			'The Canal restoration project has been completed! Boat traffic has been restored as of June 14th. The project raised the canal bottom to allow optimal flushing.',
		video: {
			src: canalVideo,
			linkText: 'Click here to watch a video of the work'
		},
		details: {
			src: '/updates/detail/canal-restoration',
			linkText: 'Click here for more details'
		}
	}
];
