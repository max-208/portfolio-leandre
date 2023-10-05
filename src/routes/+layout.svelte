<script lang="ts">
	import PageTransition from './../components/PageTransition.svelte';
    import BackgroundImage from './../components/BackgroundImage.svelte';
    import "../app.css";
    export let data:{ url:string };
    let offsetX:number, offsetY:number;
    $: {
        console.log(data.url);
        
        switch (data.url) {
        case "/contact":
            offsetX = 50;
            offsetY = 100;
            break;
        case "/gravure":
            offsetX = 0;
            offsetY = 0; //TODO : scroll
            break;
        case "/illustration":
            offsetX = 100;
            offsetY = 0; //TODO : scroll
            break;
        default:
            offsetX = 50;
            offsetY = 0;
            break;
        }
    }
</script>
<main>
    <BackgroundImage {offsetX} {offsetY}>
        <PageTransition key={data.url}>
            <div class="w-screen h-screen">
                <div class="m-auto w-fit h-fit">
                    <slot/>
                </div>
            </div>
        </PageTransition>
    </BackgroundImage>
</main>
