<script lang="ts">
  import ExternalLink from "./ExternalLink.svelte";
  import SvelteMarkdown, { type Renderers } from "svelte-markdown";

  export let source: string;
  export let externalLinks: boolean = false;

  const renderers: Partial<Renderers> = {};

  if (externalLinks) renderers.link = ExternalLink;
</script>

<SvelteMarkdown {source} {renderers} />
