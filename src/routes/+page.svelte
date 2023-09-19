<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ articles } = data);
</script>

<form action="?/createArticle" method="post" class="flex gap-y-4 flex-col p-4 w-1/2 mx-auto">
	<h3 class="text-2xl text-center font-bold">New Article</h3>
	<label for="title">Title</label>
	<input
		type="text"
		id="title"
		name="title"
		class="border-gray-300 rounded-sm border p-2 focus:outline-none"
	/>
	<label for="content">Content</label>
	<textarea
		class="border-gray-300 rounded-sm border p-2 focus:outline-none"
		name="content"
		id="content"
		rows={5}
	/>
	<button
		type="submit"
		class="bg-gray-900 text-white font-semibold rounded-sm w-1/4 px-4 py-2 mx-auto"
		>Add article</button
	>
</form>

<section class="grid grid-cols-4 p-4">
    {#each articles as article}
        <article class="bg-gray-700 text-white p-4 rounded-sm">
            <header>{article.title}</header>
            <p>{article.content}</p>
            <form action="?/deleteArticle&id={article.id}" method="post">
                <button class="bg-gray-200 p-2 rounded-sm text-gray-700 mt-4" type="submit">Delete Article</button>
                
            </form>
            <a href="/update/{article.id}" role="button">Edit Article</a>

        </article>
    {/each}
</section>