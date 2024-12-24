export interface GalleryImage {
	src: string;
	enhancedImage?: ImageFile;
	alt?: string;
	photographer?: string;
	category?: string;
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

const transformImageFiles = (images: ImageFile[], photographer?: string): GalleryImage[] =>
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
	)
];

const authorMap: Record<string, string> = {
	terri_mike: 'Terri & Mike, Guilford Ct.',
	barbara_sharon: 'Barbara & Sharon, Westminster Dr.',
	richard_helen: 'Richard & Helen, Ivanhoe Ct.',
	lidia_yoham: 'Lidia the Realtor, Ellington Ct.',
	melissa_alex: 'Melissa & Alex, Fairwich Ct.',
	maria_roberto: 'Maria & Roberto, Fairwich Ct.'
};

export const categoryMap: Record<string, string> = {
	sunsets: 'Sunsets',
	landscapes: 'Landscapes',
	wildlife: 'Wildlife',
	'night-views': 'Night Views'
};

const fileNameRegex =
	/gallery\/categories\/(?<categoryOrder>\d+)_(?<categoryName>[^\/]+)\/(?<author>[^\/]+)\/[^\/]+/;

const fileData = import.meta.glob<ImageFile>('$lib/assets/gallery/categories/**/*', {
	query: { enhanced: true },
	import: 'default'
});

const allImageData: GalleryImage[] = await Promise.all(
	Object.entries(fileData)
		.map(([path, module]) => {
			return {
				...(fileNameRegex.exec(path)?.groups as {
					categoryOrder: string;
					categoryName: string;
					author: string;
				}),
				module
			};
		})
		.toSorted((a, b) => parseInt(a.categoryOrder) - parseInt(b.categoryOrder))
		.map(async ({ module, author, categoryName }) => {
			const enhancedImage = await module();
			return {
				src: enhancedImage.img.src,
				enhancedImage,
				photographer: authorMap[author] ?? author,
				category: categoryMap[categoryName] ?? categoryName
			};
		})
);

export default allImageData;
