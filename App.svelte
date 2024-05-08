<script>
	import Form from "./Form.svelte";
	import { title } from './styles.js';
</script>

<main>
	<h2 class='{title}'> Peliculas </h2>
	<Form />
</main>

<style>

main {
	font-family: sans-serif;
	text-align: center;
}

:global(body) {
	/* --bg: #737574;
	--color: #f8ff6a;
	--color2: #a78fff; */
	background: var(--bg);
	color: var(--color);
}

</style>
