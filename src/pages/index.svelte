<script>
  import { metatags, url } from "@roxi/routify";

  metatags.title = "My Routify app";
  metatags.description = "Description coming soon...";
</script>

<div>
  <h1>Hello world</h1>
  <h2>test</h2>
  <a href={$url("./home")}> A link to the introduction section on your left </a>
</div>
