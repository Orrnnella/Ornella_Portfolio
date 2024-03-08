<script>
	import CardProgetto from '$components/CardProgetto.svelte';

	import image1 from './_images/Mbeh.jpg';
	import image2 from './_images/Europeana-2.jpg';
	import image4 from './_images/Macro.png';
	import image5 from './_images/Is-it-a-zine.jpg';
	// import { get_collection } from '$cms';
	// const progetti = get_collection('progetti');

	let card_progetti = [
		{
			categorie: ['Information Design', 'Editorial', 'UI'],
			image: image2,
			titolo: 'EUROPEANA',
			tipologia: 'MA project',
			anno: '2023'
		},
		{
			categorie: ['Branding', 'Wayfinding', 'Typography'],
			image: image4,
			titolo: 'MACRO',
			tipologia: 'MA project',
			anno: '2023'
		},
		{
			categorie: ['Typography', 'Editorial'],
			image: image1,
			titolo: 'MBEH',
			tipologia: 'MA project',
			anno: '2023'
		},

		{
			categorie: ['Illustration', 'Editorial'],
			image: image5,
			titolo: 'IS IT A ZINE?',
			tipologia: 'BA thesis',
			anno: '2022'
		}
	];
</script>

<!-- {#each progetti as progetto}
	<p>{progetto.titolo}</p>
{/each} -->
<div class="grid">
	{#each card_progetti as progetto}
		<CardProgetto
			categorie={progetto.categorie}
			image={progetto.image}
			titolo={progetto.titolo}
			tipologia={progetto.tipologia}
			anno={progetto.anno}
		/>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		padding: 16px;
		align-items: start;
	}
</style>
