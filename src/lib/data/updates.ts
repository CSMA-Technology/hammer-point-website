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
	},
	{
		title: 'Free Compost Giveaway at County Transfer Stations',
		description: `Monroe County and Monroe County’s yard waste contractor will offer free compost (nutrient-rich black dirt) to unincorporated Monroe County residents and cities of Marathon, Key Colony Beach, Islamorada, and Layton residents at the County’s three transfer stations on the first Saturday of each month from 9 a.m. to 2 p.m. or until it is gone. 
		Residents can pickup up to six bags of compost -- the compost is already bagged and ready for pickup.
		<br><br> Proof of residency is required in the form of a driver’s license, utility bill, tax bill, etc. 
		Residents are limited to one pick-up per household per event. You must be able to load the bags on your own or bring someone to assist you.
		<br><br>
		**If you are down in the Keys on  Saturdays (September 7th and/or October 5th)  and can go get your FREE compost, the HOA Beautification Committee would greatly appreciate it. This will help us with our entrance project. Just leave the bags at the entrance of the Hammer Point community (you will see a pile of other bags there). Thanks!!
		<br><br>
		<strong>
		Monroe County Transfer Station <br>
		11180 County Rd 905
		</strong>`
	}
];
export const updatePosts: Post[] = [
	{
		title: 'Tire Recycling Event',
		description:
			'FREE Monroe County Tire Recycling Event! Bring your old tires to any participating Transfer Station and they will be recycled into granules for asphalt and road surfacing. Available between 9AM and 2 PM on the following dates: 9/7, 10/5, 11/2',
		image: (await import('$lib/assets/updates/tire-recycling-event.jpg')).default
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
