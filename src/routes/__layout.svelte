<script>
	import Navbar from "../lib/Navbar.svelte";
</script>

<svelte:head>
<meta name="robots" content="noindex" />
</svelte:head>

<Navbar/>

<div class="container">
	<div class="row pt-3">
		<slot />
	</div>
</div>


