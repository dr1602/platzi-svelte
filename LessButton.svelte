	<script>
		import { button } from './styles.js'
        export let movieQuantity;
		
		const decrement = () => {
			if(movieQuantity > 0) {
        		movieQuantity -= 1;			
			}
		}
    </script>
    
    <button
		class='{button}'
		type='button' 
		on:click = {decrement}
		disabled = {movieQuantity <= 0}
	>
		-
	</button>
