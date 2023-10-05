<script lang="ts">
    import { fly, type FlyParams } from 'svelte/transition';
    import { expoInOut } from 'svelte/easing'
    import { Directions, selectedDirection } from '../stores';



    export let key:string;
    let transitionDuration:number = 300
    let inX:number|string, 
        outX:number|string, 
        inY:number|string, 
        outY:number|string = 0;
    selectedDirection.subscribe((direction:Directions)=>{
        switch (direction) {
            case Directions.Up:
                inX = 0;
                outX = 0;
                inY = "-100vh";
                outY = "100vh";
                break;
            case Directions.Down:
                inX = 0;
                outX = 0;
                inY = "100vh";
                outY = "-100vh";
                break;
            case Directions.Left:
                inX = "-100vh";
                outX = "100vh";
                inY = 0;
                outY = 0;
                break;
            case Directions.Right:
                inX = "100vh";
                outX = "-100vh";
                inY = 0;
                outY = 0;
                break;
        
            default:
                inX = 0;
                outX = 0;
                inY = 0;
                outY = 0;
                break;
        }
    })
    let inAnimation:FlyParams,
        outAnimation:FlyParams = {}
    $: inAnimation = {  
        x: inX,  
        y: inY,  
        duration: transitionDuration, 
        easing: expoInOut, 
        delay:transitionDuration, 
    }
    $: outAnimation = { 
        x: outX, 
        y: outY, 
        duration: transitionDuration, 
        easing: expoInOut, 
    }
</script>

{#key key}
    <div 
        in:fly={inAnimation}
        out:fly={outAnimation} 
    >
        <slot/>
    </div>
{/key}
