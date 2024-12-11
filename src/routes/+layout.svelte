<script lang='ts'>
//IMPORTS
	import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
//VARIABLES
    let {children} = $props();
</script>


<main>
    <Header />
    {@render children()}
    <Footer />
</main>

<style>

</style>