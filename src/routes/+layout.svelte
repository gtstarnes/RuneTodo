<script lang='ts'>
//IMPORTS
	import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
</script>


<main>
    <Header />
    <slot></slot>
    <Footer />
</main>

<style>

</style>