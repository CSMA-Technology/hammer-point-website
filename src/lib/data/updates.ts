import canalVideo from '$lib/assets/updates/canal/Canal_Work.mp4';
import beautificationSign from '$lib/assets/updates/beautification/new-sign.jpg';
import witchesRide from '$lib/assets/updates/witches-ride-24.png';
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
		title: 'Happy Thanksgiving!',
		description: `The Hammer Point Board of Directors would like to wish everyone a Happy Thanksgiving! We hope you have a wonderful holiday with family and friends.`,
		image: (await import('$lib/assets/updates/thanksgiving.jpeg')).default
	},
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
	}
];
export const updatePosts: Post[] = [
	{
		title: '11th Annual Witches Ride Fundraiser',
		description: `Come by on <strong>Saturday, October 19th</strong> starting at 12pm at The Catch Restaurant & Bar – 104080 Overseas Highway
		<br/><br/>
		Registration is a $25 donation. (You can register at the Catch or at the Caribbean Club on the day of the event.)
		<br/><br/>
		Make sure to get creative and decorate your bikes and brooms and throw on your best witches dress! There will be a costume and bike contest!
		<br/><br/>
		After the party at the Catch, we will take flight and travel by broom, bike, or car to the Caribbean Club for a big bash in the backyard with music at around 2pm!
		<br/><br/>
		The Caribbean Club outside Tiki Bar will be open and serving up spooky specialty cocktails.
		<br/><br/>
		Expect lots of other fun surprises along the way: Jell-O shots, raffles, silent auction, and the infamous Witches Dance and much more!
		<br/><br/>
		All money raised at the fundraiser is donated to the Joey Patterson Memorial Scholarship Fund and local families in need.`,
		image: witchesRide,
		details: {
			src: 'https://www.caribbeanclubkl.com/events/2024/10/19/the-11th-annual-witches-ride-fundraiser',
			linkText: 'Click here for more details',
			linkOpenInNewTab: true
		}
	},
	{
		title: 'Learn About Local Candidates',
		description: `There are two upcoming events where you can meet and learn more about the candidates running for local office here in the Upper Keys.
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
		**If you are down in the Keys on  Saturdays (September 7th and/or October 5th) and can go get your FREE compost, the HOA Beautification Committee would greatly appreciate it. This will help us with our entrance project. Just leave the bags at the entrance of the Hammer Point community (you will see a pile of other bags there). Thanks!!
		<br><br>
		<strong>
		Monroe County Transfer Station <br>
		11180 County Rd 905
		</strong>`
	},
	{
		title: 'Monroe County Vaccine Event',
		description: `
Services offered include:
<br/>
Health Screenings
<br/>
Cancer Screenings
<br/>
Food Boxes
<br/>
Transportation
<br/>
Food Bank Distribution
<br/>
Voter Registration Assistance
<br/>
Lunch and Refreshments
<br/><br/>Date: Monday September 23, 2024, from 10 AM - 1 PM
<br/><br/>Location: 101491 Overseas Highway Key Largo, Florida 33037. Suite #4 / Tradewinds Plaza 
<br/><br/>For more information: Call (786) 300-1556
<br/><br/>
Call by September 20th to reserve transportation`
	},
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
