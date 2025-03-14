import canalVideo from '$lib/assets/updates/canal/Canal_Work.mp4';
import beautificationSign from '$lib/assets/updates/beautification/new-sign.jpg';
import nauticalMarket from '$lib/assets/updates/nautical-market.jpg';
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
		title: '2025 Homeowners Annual General Meeting',
		description: `Please mark your calendars for the upcoming annual meeting:
		<br/>
		<strong>
			<br/>Date: Saturday March 15, 2025
			<br/>Time: 9am- Noon- Breakfast will be provided
			<br/>Place: 	The Key Largo Civic Center
			<br/>209 Ocean Bay Dr.
			<br/>Key Largo, FL 33037
		</strong>
`
	}
];
export const updatePosts: Post[] = [
	{
		title: 'Beautification Project Update',
		description: `The second phase of the Main Entrance Beautification project is underway! You can look forward to beautiful new native plants in the near future.
		<br/><br/>We'd like to extend a special thank you to your neighbors, the Flack family, for their generous donation of the new plants, as well as all of those who have donated to this project.
		<br/><br/>`,
		details: {
			src: '/updates/detail/beautification-project-2',
			linkText: 'For more details about the project, click here'
		}
	},
	{
		title: 'Beautification Project Underway',
		description:
			'The first phase of the Beautification project for the Front Entrance is finally underway! Several improvements will be made to the entrance, including new landscaping and a new sign.',
		image: beautificationSign,
		details: {
			src: '/updates/detail/beautification-project',
			linkText: 'To read the full details, click here'
		}
	}
];

export const archivedPosts: Post[] = [
	{
		title: 'Monroe County Tax Bill Printing Error',
		description: `Attention Hammer Point Residents:<br><br>

Monroe County Tax Collector Sam C. Steele has informed property owners of a printing error affecting mailed tax bills. Due to a vendor error, some Monroe County residents received tax bills printed on Charlotte County’s tax bill paper and displaying Charlotte County’s property values.<br><br>

Tax Collector Steele assures residents that this was not a data breach but a printing mistake by TC Delivers, the vendor responsible. Residents can rest assured that their data remains secure, and payments through the Monroe County website are safe. For any questions, residents are encouraged to call the Monroe County Tax Collector’s Property Tax Department at (305) 295-5044 or visit <a href="http://www.monroetaxcollector.com">monroetaxcollector.com</a>.<br><br>
`,
		details: {
			src: '/updates/detail/tax-collector-error',
			linkText: 'To read the full notice from the Tax Collector, click here'
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
