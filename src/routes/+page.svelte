<script>
	import CardProgetto from '$components/CardProgetto.svelte';

	import image1 from './_images/Mbeh.jpg';
	import image2 from './_images/Europeana-2.jpg';
	import image4 from './_images/Macro.png';
	import image5 from './_images/Is-it-a-zine.jpg';
	let card_progetti = [
		{
			categorie: ['Information Design', 'Editorial', 'UI'],
			image: image2,
			titolo: 'Europeana',
			tipologia: 'MA project',
			anno: '2023'
		},
		{
			categorie: ['Branding', 'Wayfinding', 'Typography'],
			image: image4,
			titolo: 'Macro',
			tipologia: 'MA project',
			anno: '2023'
		},
		{
			categorie: ['Typography', 'Editorial'],
			image: image1,
			titolo: 'Mbeh',
			tipologia: 'MA project',
			anno: '2023'
		},

		{
			categorie: ['Illustration', 'Editorial'],
			image: image5,
			titolo: 'Is it a zine?',
			tipologia: 'BA thesis',
			anno: '2022'
		}
	];
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
