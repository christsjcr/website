# Christ's JCR Website

## Installing Dependencies

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://yarnpkg.com/getting-started/install), by running `corepack enable` (may require `sudo`)
3. In the root directory of the project, run `yarn install`

## Developing

Once you've created a project and installed dependencies with `yarn install`, start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Typechecking

To run typechecking, use `yarn run check` *not* `yarn check`.

## Testing

Test the production version of the app by running `yarn build`, then `yarn preview`. The first command builds the static site to the `build/` directory and generates the sitemap, whilst the second command serves it locally.

You should always test the following:
 - Range of screen sizes (use F12 > Firefox responsive design mode)
 - Range of network speeds (same as above, but set the throttling mode and disable cache in the network tab)
 - Colour blind modes (F12 > Accessibility > Simulate)

## Deploying

SvelteKit is configurable with many [adapters](https://kit.svelte.dev/docs/adapters), which enables it to be deployed to a wide variety of platforms. The current website uses the [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static), which renders the entire site to a folder of HTML, CSS, and JS files. The sitemap is then automatically generated via [svelte-sitemap](https://github.com/bartholomej/svelte-sitemap).

Currently, the site is statically hosted on GitHub Pages. To streamline the deployment process, this project contains a GitHub Action (`.github/workflows/deploy.yml`) that automatically typechecks, builds the site, and then copies the `build/` folder over to the [christsjcr.github.io](https://github.com/christsjcr/christsjcr.github.io) repo. This then automatically triggers an update to the Pages site.

To trigger the update process, simply create a pull request to merge the `main` branch into `production`, merge it, and then wait a few minutes for the changes to be reflected in production. 

## Lighthouse

To ensure good production performance, you should evaluate new / substantially changed pages using [Google Lighthouse](https://en.wikipedia.org/wiki/Google_Lighthouse).
 - `yarn global add lighthouse`
 - e.g. `npx lighthouse https://thejcr.co.uk --view` (this will create an html file each time the command is run)

## Updating the Menu

In order to display a copy of today's menu, there is a script (`scripts/menu.js`) that produces a JSON file (`src/data/menu.json`). The script scrapes the intranet, and outputs a JSON file with format defined by the `Menu` type in `src/components/features/UpperHallMenu.svelte`.

Next, run `yarn menu`. This should open a login window - once you have logged in, the program will scrape the menu data and then close the window. You should be able to see that `menu.json` has changed using Git. You can check whether there are any problems with the format by typechecking the project. Deploying is as simple as committing the change, and pushing to production.

## Upgrading Dependencies

To upgrade dependencies, use `yarn upgrade-interactive` to select the packages you want to upgrade. You should do this frequently (at least once a term), to prevent lots of small, breaking changes from accumulating and making it hard to tell what went wrong.

## Ramblings

### I don't understand the code, and I'm feeling overwhelmed

You should read / watch / do the following:

, and then "Introduction", "Routing", and "Stores" from Part 3.


The website was created from scratch using:
 - [Typescript](https://www.typescriptlang.org/) - language
   - [Node.js Wikipedia](https://en.wikipedia.org/wiki/Node.js) - first paragraph
   - [What is npm?](https://www.youtube.com/watch?v=ZNbFagCBlwo) - Yarn is an alternative to the npm command line tool
   - [What are package.json and yarn.lock files?](https://stackoverflow.com/questions/51203500/difference-between-package-json-package-lock-json-and-yarn-lock-files)
   - [Typescript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)
   - [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
 - [Svelte](https://svelte.dev/) - a radical way of writing user interfaces, which fluidly mixes scripting, layout, and styling
   - [Rethinking Reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao)
   - [Svelte Interactive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) - all of Part 1, and then "Classes and styles", "Component composition", and "Special elements" from Part 2
 - [SvelteKit](https://kit.svelte.dev/) - framework, handles building of site
   - [Sveltekit Interactive Tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit) - "Introduction", "Routing", and "Stores > page"
   - [Adapter Static](https://kit.svelte.dev/docs/adapter-static)
 - [Bulma](https://bulma.io/) - because compscis can't design UIs
   - [Docs](https://bulma.io/documentation/)
 - [SCSS](https://sass-lang.com/documentation/syntax) - superpowered CSS, makes responsiveness and theming a bit easier

Taking a look at each of these things in isolation should 

### Why Static?

Firstly, static sites (by definition) don't change with each request, and so are lighter on server + can be fearlessly cached. More importantly, it means we can get free hosting with GitHub Pages.

### Why No Logins?

1. Security is hard
2. Worse SEO, as crawlers will not be able to see pages
3. Would necessarily require SSR, complicating logic
4. OAuth in Svelte is still a bit immature, situation may improve in the future

### Why No Database?

1. Would require a server for running the database, likely costing money (and if it doesn't, then the service will likely be short-lived)
2. Backups are hard
3. Migrations are hard
4. Database issues were the reason the last website was scrapped

### How to Add Rarely Changing Data

This can be done by creating a `.ts` or `.json` file containing the information. This information can then be updated by hand (e.g. committee information) or by a script (e.g. menu information).

### User Submitted Data

Don't. Just don't. 

However, if you *really* need to do this, it's often *much* easier to just use Google forms / sheets / docs. This allows users to be restricted to members of the university only (reducing spam), whilst removing the need for databases. If the system becomes very popular, only then should you re-address whether it is worth adding auth + creating an API for this. 

> Tip: Christ's undergrads should all be part of the `"gutsrhc"[::-1] + "@insts.lookup.cam.ac.uk"` google group, so you can use the Webmaster Google Drive to host sheets and docs and give access to only this group.
