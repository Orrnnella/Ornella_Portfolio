<script>
	export let categorie;
	export let image;
	export let titolo;
	export let tipologia;
	export let anno;
</script>


<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/tailwindcss@3.4.1/src/css/preflight.css"
	/>
</svelte:head>


<div class="Card">
	<div class="categorie">
	{#each categorie as categoria,i}
		<p
			class="categoria"
			class:categoria-bold={i==0}
		>
			{categoria}
		</p>
	{/each}
	</div>
	<img class="image" src={image} alt="cover_progetto"/>
	<p class="titolo">{titolo}</p>
	<div class="footer">
	<p class="tipologia">{tipologia}</p>
	<p class="anno">{anno}</p>
	</div>
</div>

<style>
 .Card{
	background-color: black;
	border-radius:20px;
	color: white;
	font-family: helvetica;
	padding: 20px;
}
	.categorie{
	font-size:32px;
	display:flex;
	flex-direction:row;
	justify-content:left;
	gap:20px;
	}

	.categoria{
	border-color: white;
	border-width:2px;
	color:white;	
	border-radius:60px;
	padding:10px;
	}

	.categoria-bold {
	background-color:white;
	color:black;
	border-radius:60px;
	padding:10px;
	}

	.image{
		object-fit: cover;
		aspect-ratio: 4/5;
		width:100%;
		border-radius: 20px;
		margin-top:20px;
}
	.titolo{
		font-size:128px;		
	}
.footer{
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	font-size:32px;
}
</style>