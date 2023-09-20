# Christ's JCR Website

## Installing Dependencies

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://yarnpkg.com/getting-started/install), by running `corepack enable`
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

Currently, the site is statically hosted on GitHub pages. To streamline the deployment process, this project contains a GitHub action (`.github/workflows/deploy.yml`) that automatically typechecks, builds the site, and then copies the `build/` folder over to the `christsjcr.github.io` repo. This then automatically triggers an update to the pages site.

To trigger the update process, simply create a pull request to merge the `main` branch into `production`, merge it, and then wait a few minutes for the changes to be reflected in production. 

## Lighthouse

To ensure good production performance, you should evaluate new / substantially changed pages using [Google Lighthouse](https://en.wikipedia.org/wiki/Google_Lighthouse).
 - `yarn global add lighthouse`
 - e.g. `npx lighthouse https://thejcr.co.uk --view` (this will create an html file each time the command is run)

## Updating the Menu

In order to display a copy of today's menu, there is a script (`scripts/menu.js`) that produces a JSON file (`src/data/menu.json`). The script scrapes the intranet, and outputs a JSON file with format defined by the `Menu` type in `src/components/features/UpperHallMenu.svelte`.

Next, run `yarn menu`. This should open a login window - once you have logged in, the program will scrape the menu data and then close the window. You should be able to see that `menu.json` has changed using Git. You can check whether there are any problems with the format by typechecking the project. Deploying is as simple as committing the change, and pushing to production.
