source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Jekyll 4 needs this explicitly on Ruby 3.4+ (removed from stdlib).
gem "webrick", "~> 1.8"
