<script>
	import { beforeNavigate, goto } from "$app/navigation";

    const handleClick = () => {
        goto("/about")
    }

    beforeNavigate((navigation)=>{
        console.log(navigation)
    })
</script>

<h1>Products</h1>
<button on:click={handleClick}>Place order</button>