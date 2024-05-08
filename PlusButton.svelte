	<script>
		import { button } from './styles.js'
        export let movieQuantity;
        export let maxTickets;

		const increment = () => {
			console.log('Increment button clicked');
			console.log('Before increment - movieQuantity:', movieQuantity);
			console.log('Before increment - maxTickets:', maxTickets);

			if(movieQuantity < maxTickets) {
        		movieQuantity++;			
			}

			console.log('After increment - movieQuantity:', movieQuantity);
			console.log('After increment - maxTickets:', maxTickets);
		}
    </script>
    
    <button 
		class='{button}'
		type='button'
		on:click = {increment}
		disabled = {movieQuantity >= maxTickets}
	>
		+
	</button>
