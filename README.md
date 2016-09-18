Personal Website
=== 

Written in Rails, this encompasses my blog and interests.

## Setup

1. Requires Postgres
2. `bundle install` from the root directory, then `bin/rake db:create db:migrate`
3. Setup `config/config.yml`. Make sure to fill out default with your information.
```
theme: &theme
  website_title: Julian Nadeau
  website_email: julian@jnadeau.ca
  website_tagline: I am a production engineer at <a href="http://shopify.com">Shopify.</a> I work on Developer Infrastructure.
  theme: theme_1

social_media: &social_media
  git_user: jules2689
  twitter_user: jules2689
  linkedin_url: http://www.linkedin.com/pub/julian-nadeau/49/1b0/721

gitcdn: &gitcdn
  git_cdn_repo: jules2689/gitcdn
  git_cdn_repo_url: https://jules2689.github.io/gitcdn/
```
4. Populate `secrets/development.ejson` and `secrets/production.ejson` with your own ejson keys and credentials
4. Create a user manually. This is a personal website, so there are no registrations.
5. All setup with Capistrano. Use `cap production deploy` to deploy (setting proper IPs in `deploy.rb`)
6. Use `cap production setup` to copy the secrets.yml file to the server
7. Make sure you have a `gitcdn`. This should be [this repo](https://github.com/jules2689/gitcdn), please remove the images from mine!
