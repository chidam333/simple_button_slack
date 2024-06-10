<script>
	import { onMount } from "svelte";

    function sendMessage(){
        fetch("/api")
    }
</script>
<main>
    <form method="POST">
        <button on:click={()=>{sendMessage()}}>send message!</button>
    </form>
</main>