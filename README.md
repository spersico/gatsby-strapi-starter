> **Warning :warning:**
>
> The original repository was deprecated. Strapi no longer maintains a Heroku-deployable Strapi-Gatsby integration oficially. Feel free to contribute or fork it. 
> The original doesn't work anymore, so use this one or use **[strapi/strapi-starter-gatsby-blog](https://github.com/strapi/strapi-starter-gatsby-blog)** instead.

# Gatsby-Strapi Starter Blog

Gatsby starter for creating a blog with Strapi. Allowing you to try Strapi with Gatsby with a simple blog example. 

This starter is actually the result of this [tutorial](https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi) coupled with a bunch of updates and improvements to make it work on July 2021.

![screenshot image](/screenshot.png)

## Backend (Start from here!)

[Here](https://github.com/spersico/strapi-heroku-starter) is the repository of the backend of this starter. Build this one first (Really. You'll thank me later)

## Frontend

When creating, you need to add the url of your Heroku instance (without the trailing slash) as a parameter to the following url.

#### *So I Really recomend you to deploy the backend first*

**On Netflify**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/spersico/gatsby-strapi-starter)

**On Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fspersico%2Fgatsby-strapi-starter&env=API_URL&envDescription=Put%20your%20Strapi%20URL%20without%20the%20trailing%20slash%20(e.g.%20https%3A%2F%2Fyourapp.herokuapp.com)&project-name=gatsby&repo-name=gatsby-blog&demo-title=Gatsby%20Blog%20with%20Strapi&demo-description=A%20statically%20generated%20blog%20using%20Gatsby%20and%20Strapi&demo-image=https%3A%2F%2Fi.imgur.com%2F3ihGdLe.png)

## Getting started

**Clone the Repo**


```bash
git clone https://github.com/spersico/gatsby-strapi-starter.git gatsby
cd strapi
```

**Start the frontend server**

```bash
npm install
npm run develop
```

Gatsby server is running here => [http://localhost:8000](http://localhost:8000)


## Extra (untested stuff)

Now you'll need to create a Webhook on your strapi server in order to build your Gatsby project each time your create/update/delete content

- Open your Strapi admin panel and go to `/admin/settings/webhooks`
- Create a new Webhook with following properties:
  - Name: `Gatsby Cloud`
  - Url: The first Webhook Url Gatsby Cloud provide in your Gatsby Dashboard Sites. It should be something like this: `https://webhook.gatsbyjs.com/hooks/data_source/` without the `/publish/`
  - Check every Events for `Entry` and `Media`

That's it! Now Strapi will inform Gatsby Cloud to build your Gatsby project everytime you create/update/delete content
