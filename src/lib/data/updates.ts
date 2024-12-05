import canalVideo from '$lib/assets/updates/canal/Canal_Work.mp4';
import beautificationSign from '$lib/assets/updates/beautification/new-sign.jpg';
import boatParade from '$lib/assets/updates/boat-parade-2024.jpg';
import gardenClubHolidayMarket from '$lib/assets/updates/garden-club-holiday-market-2024.png';
import santaCarolers from '$lib/assets/updates/santa-carolers-2024.jpg';
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
		title: 'Christmas in the Keys Boat Parade',
		description:
			'Enter your holiday decorated boat for a chance at $5000 CASH & prizes! The parade will begin at 7:30PM on December 14th.',
		image: boatParade,
		details: {
			linkText: 'Click here for more details',
			src: 'https://www.keylargoboatparade.com/',
			linkOpenInNewTab: true
		}
	},
	{
		title: 'Florida Keys Garden Club Holiday Market',
		description:
			'Come out and enjoy our wonderful weather and delicious food and unique goods! Join the Florida Keys Garden Club for their  Holiday Market on December 7th from 9am-4pm. There will be vendors, food trucks, art, and more!',
		image: gardenClubHolidayMarket
	},
	{
		title: 'Santa Claus & His Carolers',
		description:
			'Join in the fun and sing along with Santa & his Carolers! <br><br>Santa & his Carolers will depart Station 20 at 5:10PM. See the Caroling Route above for when they will be passing by your area.',
		image: santaCarolers
	}
];
export const updatePosts: Post[] = [
	{
		title: 'Monroe County Tax Bill Printing Error',
		description: `Attention Hammer Point Residents:<br><br>

Monroe County Tax Collector Sam C. Steele has informed property owners of a printing error affecting mailed tax bills. Due to a vendor error, some Monroe County residents received tax bills printed on Charlotte County’s tax bill paper and displaying Charlotte County’s property values.<br><br>

Tax Collector Steele assures residents that this was not a data breach but a printing mistake by TC Delivers, the vendor responsible. Residents can rest assured that their data remains secure, and payments through the Monroe County website are safe. For any questions, residents are encouraged to call the Monroe County Tax Collector’s Property Tax Department at (305) 295-5044 or visit <a href="http://www.monroetaxcollector.com">www.monroetaxcollector.com</a>.<br><br>
`,
		details: {
			src: '/updates/detail/tax-collector-error',
			linkText: 'To read the full notice from the Tax Collector, click here'
		}
	},
	{
		title: 'Free Compost Giveaway at County Transfer Stations',
		description: `Monroe County and Monroe County’s yard waste contractor will offer free compost (nutrient-rich black dirt) to unincorporated Monroe County residents and cities of Marathon, Key Colony Beach, Islamorada, and Layton residents at the County’s three transfer stations on the first Saturday of each month from 9 a.m. to 2 p.m. or until it is gone. 
		Residents can pickup up to six bags of compost -- the compost is already bagged and ready for pickup.
		<br><br> Proof of residency is required in the form of a driver’s license, utility bill, tax bill, etc. 
		Residents are limited to one pick-up per household per event. You must be able to load the bags on your own or bring someone to assist you.
		<br><br>
		**If you are down in the Keys on  Saturdays (September 7th and/or October 5th) and can go get your FREE compost, the HOA Beautification Committee would greatly appreciate it. This will help us with our entrance project. Just leave the bags at the entrance of the Hammer Point community (you will see a pile of other bags there). Thanks!!
		<br><br>
		<strong>
		Monroe County Transfer Station <br>
		11180 County Rd 905
		</strong>`
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
