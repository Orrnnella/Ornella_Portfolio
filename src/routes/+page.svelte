<script>
	import CardProgetto from "$components/CardProgetto.svelte";

	let card_progetti=[
		{
		categorie:["Information Design", "Editorial", "UI"],
		image:"https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		titolo:"Europeana",
		tipologia:"MA project",
		anno:"2023"
	},
		{
		categorie:["Branding", "Wayfinding", "Typography"],
		image:"https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		titolo:"Macro",
		tipologia:"MA project",
		anno:"2023"
	},
		{
		categorie:["Typography","Editorial"],
		image:"https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		titolo:"Mbeh",
		tipologia:"MA project",
		anno:"2023"
	},
		{
		categorie:["Visual Design","Editorial"],
		image:"https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		titolo:"Cartastraccia",
		tipologia:"MA project",
		anno:"2023"
	}
	]



	
</script>

{#each card_progetti as progetto}

<CardProgetto
categorie={progetto.categorie}
image={progetto.image}
titolo={progetto.titolo}
tipologia={progetto.tipologia}
anno={progetto.anno}
	/>
{/each}