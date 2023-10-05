<script lang="ts">
    import { base } from '$app/paths'
    export let imageUrl = "/background.png"; // URL of the background image
    export let offsetX = 50; // Initial X offset (pan)
    export let offsetY = 0; // Initial Y offset (pan)

    let backgroundX:string, backgroundY:string;
    $: backgroundX = offsetX + "%";
    $: backgroundY = offsetY + "%";
</script>

<div class="relative w-screen h-screen">
    <div class="relative z-50">
        <slot/>
    </div>
    <div class="-z-50 absolute top-0 left-0">
        <div class="overflow-hidden relative w-screen h-screen">
            <div
                class="h-[100vh]"
                style={`background-image: url(${base + imageUrl}); background-position: ${backgroundX} ${backgroundY}; transition: background-position .3s`}
            ></div>
        </div>
    </div>
</div>
