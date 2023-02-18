<script>
import { metatags, page, url } from '@roxi/routify';

const ogImage ="https://eduardoavila.com/social-card.png";
const description = $metatags.description || $page.description;
const title = $metatags.title || $page.title
const articleDate = page.date ? new Date(page.date) : new Date();
const author = "Eduardo Avila"
const titleSeparator = "•";
const siteTitle = `${title} ${titleSeparator}`;
const canonicalURL = new URL($url(), process.env.SITE);
const socialImageURL = new URL(ogImage ? ogImage : "/social-card.png", $url()).href;

</script>
<svelte:head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<!-- Icons / Favicon -->
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.webmanifest" />
<link rel="canonical" href={canonicalURL} />

<!-- Primary Meta Tags -->
<title>{siteTitle}</title>
<meta name="title" content={siteTitle} />
<meta name="description" content={description} />
<meta name="author" content={author} />


<!-- Open Graph / Facebook -->
<meta property="og:type" content={articleDate ? "article" : "website"} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalURL} />

<meta property="og:image" content={socialImageURL} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />


<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={canonicalURL} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={socialImageURL} />
</svelte:head>