import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const posts = [
		{
			slug: 'sveltekit',
			content: 'fdsfdsf'
		}
	];

	return json(posts);
};
