# Git describe

Simple package to provide a semver compatible version of `git describe`.

## Usage

```sh
yarn add @contiamo/git-describe
```

```ts
// With `git describe --tags --always --dirty` -> "v16.0.4-1-gf93077752-dirty"
import { getSemanticVersion } from '@contiamo/git-describe';

getSemanticVersion(); // v16.0.5-dev.1+gf93077752.dirty
```

Please note that the patch version is bumped, so the semver order is correct. We can check this on any semver validator:

https://jubianchi.github.io/semver-check/#/version/v16.0.5-dev.1%2Bgf93077752.dirty

## Ref

https://github.com/mdomke/git-semver
