# rebeccagoldberg.github.io

Source for [rebeccagoldberg.org](https://rebeccagoldberg.org), a Jekyll site built on GitHub Pages.

## Structure

- `index.md` — the homepage; front matter only, rendered entirely by `_layouts/mainpage.html` (a single self-contained layout with inline CSS/JS, no other includes or data files).
- `_layouts/mainpage.html` — the whole site.
- `_config.yml` — site title, description, and SEO/sitemap plugin settings.
- `assets/img/` — site images.

## Development

If you want to use this template, or enhance it, you can use Docker.
Just run `./build-in-docker.sh` and then point your browser to <http://localhost:4000/>.

Or locally, with Ruby installed: `bundle install && bundle exec jekyll serve`.

## Deployment

The site deploys via GitHub Actions (`.github/workflows/pages.yml`) on every
push to `master` — not the legacy "Deploy from a branch" Jekyll build. This
means the `Gemfile` can use current, non-vulnerable gem versions instead of
being pinned to whatever the `github-pages` gem bundles.

Repo setting required (one-time): **Settings → Pages → Build and deployment
→ Source → GitHub Actions**.
