<script>
	import { request } from 'http';
	import { onMount } from "svelte";
</script>
<main>
    <form method="POST">
        <div class="span">
            <input name="opt1" type="text" required>
            <br>
            <input name="opt2" type="text" required>
        </div>
        <button>send message!</button>
    </form>
</main>