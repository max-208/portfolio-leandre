<script lang="ts">
    import { base } from '$app/paths'
    import { Directions, selectedDirection } from "../stores";

    export let direction:Directions = Directions.None;
    export let href:string = "/";
    const handleClick = ()=>{
        selectedDirection.set(direction);
    }
</script>
<a href={base+href} {...$$restProps} on:click={handleClick}>
    <slot/>
</a>