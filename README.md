# rspack-repro

## Recreate issue

1. Run `pnpm run dev:rspack`
2. Watch http://localhost:8080, it will crash because `process` is not defined

## Expected behavior

Show "Hello, world catchmeifyoucan" on http://localhost:8080 since we are getting the environment variable `REACT_APP_TEST_ENV` and using `loadEnv` in `rsbuild.config.ts`.

## Actual behavior

Crashing javascript because `process.env.REACT_APP_TEST_ENV` is not replaced with the value, but using `process.env.NODE_ENV` in `render.js` works fine.

- [Rspack website](https://www.rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

A GitHub template for creating a Rspack minimal reproducible example.

Webpack is included for comparing the outputs.

## versions

```
    "@rspack/cli": "nightly",
    "webpack-cli": "^5.0.1",
    "webpack": "^5.79.0",
```

## Usages

`pnpm run build` would both run Webpack and Rspack with config `./config.mjs`

- Webpack will emits output in `./webpack-dist`
- Rspack will emits output in `./rspack-dist`

`./webpack-dist` and `./rspack-dist` are purposely not added to `.gitignore`.
It is recommended to commit these files so we quickly compare the outputs.
