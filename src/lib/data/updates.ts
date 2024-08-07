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
		title: 'Learn About Local Candidates',
		description: `There are two upcoming events where you can meet and learn more about the candidates running for local office here in the Upper Keys.
		<br/><br/>The <strong>Meet the Candidates Mixer</strong> will take place August 13th at 6PM at the Crooked Palm Cabana.
		<br/><br/>The <strong>Upper Keys Candidate Forum</strong> will take place October 10th at 5:30PM at the Murray Nelson Government Center.`,
		image: (await import('$lib/assets/updates/informed-voter.jpg')).default
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
