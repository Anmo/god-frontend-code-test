# Volvo Cars (Global Online Digital)

## Pre-requirements

- Node (v18.17)
- Yarn

## Install

Just run `yarn` to install dependencies

## Running project

To run the project you can just run `yarn dev` and then access http://localhost:3000
You can also access to the deployed version at https://god-frontend-code-test-kappa.vercel.app/

## Testing

To run the unit tests you can run the command: `yarn test`

_Note: the tests weren't exaustive, it was just focus on the pages and utils_

## Technical decisions

I tried to follow the base requirements as possible, but I tried to not overthink.
One example of that is with the SelectBodyType component, in a normal project we would create a Select component and let the options (getting them async or not) would be received from the page (directly by fetching it, similar to what I have done inside the component or from a state management).

Regarding the API I tried to have a real straightforward approach, read from the file and do small operations (filtering, finding or mapping) on top of it. Obviously in a real project we would have some sort of DB and need to access it and also take into consideration authorization/authentication.

In terms of design system, I notice that the suggested library (`VCC-UI`) was with alot of deprecation notice, therefore I took the liberty to go with `@volvo-cars/css`.

# Original README:

## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop

![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile

![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data and render it in the browser. The data looks like this:

```json
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg"
  }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- The project is bootstraped using [Next.js](https://nextjs.org/).
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you use our design system component library, [VCC-UI](https://vcc-ui.vercel.app/)
- If you add a filter bar on the top to filter cars by `bodyType`

## Submission

Clone this repository to get started. Due to a number of reasons, not least privacy, you will be asked to zip your solution and mail it in, instead of submitting a pull-request. In order to maintain an unbiased reviewing process, please ensure to keep your name or other Personal Identifiable Information (PII) from the code.

