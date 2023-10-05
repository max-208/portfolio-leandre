<script>
	import ChangePage from './../components/ChangePage.svelte';
    import { Directions } from '../stores';
</script>

<h1 class="text-6xl">Acceuil</h1>
<ChangePage href="/gravure" direction={Directions.Left} >
    Gravure
</ChangePage>
<ChangePage href="/illustration" direction={Directions.Right} >
    Illustration
</ChangePage>
<ChangePage href="/contact" direction={Directions.Down} >
    Contact
</ChangePage>