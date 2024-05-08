<script>
  import { form } from './styles.js';
	import Less from "./LessButton.svelte";
	import Plus from "./PlusButton.svelte";
  import { setStyle } from './theme.js';

	const movies = [
            {
              name: 'Revengers',
              maxTickets: 12,
              quantity: 0,
            },
            {
              name: 'SpuderMoon',
              maxTickets: 10,
              quantity: 0,
            },
            {
              name: 'BaturuMan',
              maxTickets: 8,
              quantity: 0,
            },
            {
              name: 'JourneyRabbit',
              maxTickets: 2,
              quantity: 0,
            },
            {
              name: 'BluePenter',
              maxTickets: 3,
              quantity: 0,
            },
            {
              name: 'RiverGensMidGame',
              maxTickets: 5,
              quantity: 0,
            },
          ]
</script>

{#each movies as movie}
<form class='{form}' on:mouseenter={setStyle(movie.name)}>
	<h3> {movie.name} </h3>
	<Less bind:movieQuantity={movie.quantity}/>
		{movie.quantity}
  <Plus bind:movieQuantity={movie.quantity} bind:maxTickets={movie.maxTickets}/>
</form>
{/each}

<style>
  button {}
  button:hover {}
  button[disabled] {}
</style>
