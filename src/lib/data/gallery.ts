export interface GalleryImage {
	src: string;
	enhancedImage?: ImageFile;
	alt?: string;
	photographer?: string;
}
interface ImageFile {
	sources: {
		avif: string;
		webp: string;
		png: string;
	};
	img: {
		src: string;
		w: number;
		h: number;
	};
}

const transformImageFiles = (images: ImageFile[], photographer?: string) =>
	images.map((image) => ({
		src: image.img.src,
		enhancedImage: image,
		photographer
	}));

const imageData: GalleryImage[] = [
	// Terri and Mike images
	...transformImageFiles(
		await Promise.all(
			Object.values(
				import.meta.glob<ImageFile>('$lib/assets/gallery/terri_mike/*', {
					query: { enhanced: true },
					import: 'default'
				})
			).map((module) => module())
		),
		'Terri & Mike, Guilford Ct.'
	),
	// Barbara & Sharon Images
	...transformImageFiles(
		await Promise.all(
			Object.values(
				import.meta.glob<ImageFile>('$lib/assets/gallery/barbara_sharon/*', {
					query: { enhanced: true },
					import: 'default'
				})
			).map((module) => module())
		),
		'Barbara & Sharon, Westminster Dr.'
	),
	// Richard and Helen images
	...transformImageFiles(
		await Promise.all(
			Object.values(
				import.meta.glob<ImageFile>('$lib/assets/gallery/richard_helen/*', {
					query: { enhanced: true },
					import: 'default'
				})
			).map((module) => module())
		),
		'Richard & Helen, Ivanhoe Ct.'
	),
	// Lidia Yoham images
	...transformImageFiles(
		await Promise.all(
			Object.values(
				import.meta.glob<ImageFile>('$lib/assets/gallery/lidia_yoham/*', {
					query: { enhanced: true },
					import: 'default'
				})
			).map((module) => module())
		),
		'Lidia the Realtor, Ellington Ct.'
	),
	// Melissa and Alex images
	...transformImageFiles(
		await Promise.all(
			Object.values(
				import.meta.glob<ImageFile>('$lib/assets/gallery/melissa_alex/*', {
					query: { enhanced: true },
					import: 'default'
				})
			).map((module) => module())
		),
		'Melissa & Alex, Fairwich Ct.'
	),
	//Maria and Roberto images
	...transformImageFiles(
		await Promise.all(
			Object.values(
				import.meta.glob<ImageFile>('$lib/assets/gallery/maria_roberto/*', {
					query: { enhanced: true },
					import: 'default'
				})
			).map((module) => module())
		),
		'Maria & Roberto, Fairwich Ct.'
	),
	// Anthony & Belkis Modrono
	...transformImageFiles(
		await Promise.all(
			Object.values(
				import.meta.glob<ImageFile>('$lib/assets/gallery/anthony_belkis/*', {
					query: { enhanced: true },
					import: 'default'
				})
			).map((module) => module())
		),
		'Anthony & Belkis, Camelot Dr.'
	),
	// Lynn Young images
	...transformImageFiles(
		await Promise.all(
			Object.values(
				import.meta.glob<ImageFile>('$lib/assets/gallery/lynn_young/*', {
					query: { enhanced: true },
					import: 'default'
				})
			).map((module) => module())
		),
		'Lynn & Mike, Westminster Dr.'
	)
];

export default imageData.reverse();
