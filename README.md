# rebeccagoldberg.github.io

Source for [rebeccagoldberg.org](https://rebeccagoldberg.org), a Jekyll site built on GitHub Pages.

## Structure

- `index.md` — the homepage; front matter only, rendered entirely by `_layouts/mainpage.html` (a single self-contained layout with inline CSS/JS, no other includes or data files).
- `_layouts/mainpage.html` — the whole site.
- `_config.yml` — site title, description, and SEO/sitemap plugin settings.
- `assets/img/` — site images.

## Development

If you want to use this template, or enhance it, you can use Docker.
Just run `./build-in-docker.sh` and then point your browser to http://localhost:4000/.

Note: Developing for GitHub Pages is tricky. You should always rely on
[safe plugins](https://pages.github.com/versions/) because any other, that's not
in the list will simply not run.
