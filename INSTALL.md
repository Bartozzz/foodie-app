# Installation guide

## Stable releases:

You can download one of the [stable releases](https://github.com/Bartozzz/foodie-app/releases). There should be a compressed package for **Linux**, **Windows** and **macOS**. Linux package should work on *most* Linux distributions.

> **Note:** We use [`Electron`](https://electronjs.org/) to build and run Foodie on desktop platforms. If you encounter any problems, please, check first that you platform is being supported by `Electron` [before creating an issue](https://github.com/Bartozzz/foodie-app/issues/new).

## Developer preview:

You can build Foodie yourself to check the latest features (as the last stable release can be several commits behind the `master` branch). You will need the latest version of [Node.js](https://nodejs.org/en/download/) installed locally on your machine and follow [instructions in README.md](https://github.com/Bartozzz/foodie-app#development):

1. Clone or [download](https://github.com/Bartozzz/foodie-app/archive/master.zip) Foodie's repository (`$ git clone https://github.com/Bartozzz/foodie-app.git`).
2. Move to the downloaded directory in your terminal (`$ cd foodie-app`).
3. Download NPM dependencies  (`$ npm install`).
4. Once all dependencies are installed, build Foodie (`$ npm run package`).
5. Once the build is finished, you can grab Foodie binaries from `release/` folder.

> **Note:** We encourage you to use Bash or a similar Unix shell. Our build scripts could be incompatible with Windows. Therefore, you can [help us to make it working everywhere](https://github.com/Bartozzz/foodie-app/pulls).
