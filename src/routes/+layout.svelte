<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import '../styles.css';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@3.4.1/src/css/preflight.css" />
</svelte:head>

<Navbar />
<div class="Navbar">
	<div class="Nome">Orrnnella</div>
	<div class="Projects">Projects</div>
</div>
<slot />

<div class="Footer">
	<div class="email">My E-mail</div>
	<div class="behance">My Behance</div>
	<div class="instagram">My Instagram</div>
</div>

<style>
	.Navbar {
		padding: 16px;
		color: black;
		font-family: Arial, Helvetica, sans-serif;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 32px;
	}
	.Nome {
		border-color: rgb(0, 255, 0);
		border-width: 2px;
		border-radius: 60px;
		padding: 10px;
	}
	.Footer {
		padding: 16px;
		color: black;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 32px;
		display: flex;
		flex-direction: left;
		justify-content: space-between;
	}
</style>
