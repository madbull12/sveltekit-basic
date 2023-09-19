<script lang="ts">
       import type { PageData } from './$types';

   export let data:PageData;

</script>

{#each data.comments as comment (comment.id) }
<div>
    <p>{comment.content}</p>
</div>
{/each}
