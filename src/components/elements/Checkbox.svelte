<script lang="ts">
    let checked: boolean = false;
    export let name: string = "";
    export let value: string = "on";
    export let onChange: (checked: boolean) => void;
</script>

<input
    type="checkbox"
    {name}
    {value}
    bind:checked
    on:change={() => onChange(checked)} />
