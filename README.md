> **Warning :warning:**
>
> This repository is deprecated. Strapi no longer maintains it. 
> You can still use it, but bear in mind, that you'll probably need to update the dependencies, or use **[strapi/strapi-starter-gatsby-blog](https://github.com/strapi/strapi-starter-gatsby-blog)** instead.

# Strapi Starter Gatsby Blog

Gatsby starter for creating a blog with Strapi.

This starter allows you to try Strapi with Gatsby with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

You may want to know how to develop such a starter by your own! This starter is actually the result of this [tutorial](https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi)

![screenshot image](/screenshot.png)

### Backend

To deploy the Strapi instance you'll need:

- [An Heroku account](https://signup.heroku.com/) for free
- [A Cloudinary account for saving images](https://cloudinary.com/users/register/free) for free

Once you have created these accounts you can deploy your instance by clicking on this button

[Here](https://github.com/spersico/strapi-heroku-starter) is the repository of the backend of this starter

### Frontend

When creating, you need to add the url of your Heroku instance (without the trailing slash) as a parameter to the following url.

#### *So I Really recomend you to deploy the backend first*


**On Netflify**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/spersico/gatsby-strapi-starter)

**On Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fspersico%2Fgatsby-strapi-starter&env=API_URL&envDescription=Put%20your%20Strapi%20URL%20without%20the%20trailing%20slash%20(e.g.%20https%3A%2F%2Fyourapp.herokuapp.com)&project-name=gatsby&repo-name=gatsby-blog&demo-title=Gatsby%20Blog%20with%20Strapi&demo-description=A%20statically%20generated%20blog%20using%20Gatsby%20and%20Strapi&demo-image=https%3A%2F%2Fi.imgur.com%2F3ihGdLe.png)

### Extra (untested)

Now you'll need to create a Webhook on your strapi server in order to build your Gatsby project each time your create/update/delete content

- Open your Strapi admin panel and go to `/admin/settings/webhooks`
- Create a new Webhook with following properties:
  - Name: `Gatsby Cloud`
  - Url: The first Webhook Url Gatsby Cloud provide in your Gatsby Dashboard Sites. It should be something like this: `https://webhook.gatsbyjs.com/hooks/data_source/` without the `/publish/`
  - Check every Events for `Entry` and `Media`

That's it! Now Strapi will inform Gatsby Cloud to build your Gatsby project everytime you create/update/delete content

### Pages

- "/" display every articles
- "/article/:id" display one article
- "/category/:id" display articles depending on the category

### Getting started

**Backend**

See full instructions [here](https://github.com/spersico/strapi-heroku-starter)

**Frontend**

```bash
git clone https://github.com/spersico/gatsby-strapi-starter.git strapi
cd strapi
```

#### Start the frontend server

```bash
npm install
npm run develop
```

Gatsby server is running here => [http://localhost:8000](http://localhost:8000)

Enjoy this starter
