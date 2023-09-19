<script lang="ts">
    import type { PageData } from "./$types";
    export let data:PageData

    $: ({ article }=data)
</script>

<form action="?/updateArticle" method="post" class="flex gap-y-4 flex-col p-4 w-1/2 mx-auto">
	<h3 class="text-2xl text-center font-bold">New Article</h3>
	<label for="title">Title</label>
	<input
		type="text"
        value={article.title}
		id="title"
		name="title"
		class="border-gray-300 rounded-sm border p-2 focus:outline-none"
	/>
	<label for="content">Content</label>
	<textarea
		class="border-gray-300 rounded-sm border p-2 focus:outline-none"
		name="content"
		id="content"
        value={article.content}
		rows={5}
	/>
	<button
		type="submit"
		class="bg-gray-900 text-white font-semibold rounded-sm w-1/4 px-4 py-2 mx-auto"
		>Update article</button
	>
</form>
