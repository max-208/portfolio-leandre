<script lang="ts">
import { Directions, selectedDirection } from "../stores";

export let direction:Directions = Directions.None;
export let href:string = "/";
const handleClick = ()=>{
    selectedDirection.set(direction);
}
</script>
<a {href} {...$$restProps} on:click={handleClick}>
    <slot/>
</a>