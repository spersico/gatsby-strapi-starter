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

**On Netflify**

- [A Netilfy account](https://app.netlify.com/signup) for free

Once you have created your account, add the url of your Heroku instance (without the trailing slash) as a parameter to the following url.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/spersico/gatsby-strapi-starter)

**On Vercel**

Coming soon...

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
