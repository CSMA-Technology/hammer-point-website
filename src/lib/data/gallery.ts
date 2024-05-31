export interface GalleryImage {
	src: string;
	alt?: string;
	photographer?: string;
}
const imageData: GalleryImage[] = [
	{
		src: (await import('$lib/assets/gallery/attributed/thayer_manatees.jpg')).default,
		photographer: 'Terri & Mike, Guilford'
	},
	// Sharon Berry Images
	...(await Promise.all(
		Object.values(
			import.meta.glob<{ default: string }>('$lib/assets/gallery/attributed/sharon_berry/*')
		).map((module) => module())
	).then((images) => {
		return [...images.map(({ default: src }) => ({ src, photographer: 'Sharon B., Westminster' }))];
	})),
	// Unattributed Images
	...(await Promise.all(
		Object.values(import.meta.glob<{ default: string }>('$lib/assets/gallery/unattributed/*')).map(
			(module) => module()
		)
	).then((images) => {
		return [...images.map(({ default: src }) => ({ src }))];
	}))
];

export default imageData;
