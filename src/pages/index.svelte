<script>
  import { metatags,url } from "@roxi/routify";
  import Title from "../components/Nav/Title/Title.svelte";

  metatags.title = "My Routify app";
  metatags.description = "Description coming soon...";
</script>

<Title>Welcome</Title>
<a href={$url("./contact")}>
  A link to the introduction section on your left
</a>
