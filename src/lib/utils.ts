export function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	return String(error);
}

/**
 * @param form A form element to submit to Netlify
 * @returns An error message if the submission failed
 */
export const submitFormToNetlify = async (form: HTMLFormElement) => {
	try {
		const response = await fetch('/', {
			method: 'POST',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			body: new URLSearchParams(new FormData(form) as any).toString(),
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		});
		if (!response.ok) {
			throw new Error(`${response.status} : ${response.statusText}`);
		}
	} catch (ex) {
		return getErrorMessage(ex);
	}
};
