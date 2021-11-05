# Code with Care
## Installation
If you have these packages already installed, please skip over to the [Running the Application](#Running-the-Application) section.

**_Please Note: To run this application locally, you need to have all of these dependencies installed._**

### NodeJS and NPM
1) Download the installer compatible with your operating system, from the [nodejs website.](https://nodejs.org/en/download/)
2) Launch the installer.
3) Complete the installation process through the Setup Wizard.
4) Verify that the installation process has completed successfully:
   1) Open a `command prompt`/`terminal` window.
   2) Type the following and hit enter: `node -v`
      1) If the output is something like `v16.13.0`, then node has installed successfully.
   3) Type the following and hit enter: `npm -v`
      1) If the output is something like `8.1.0`, then npm has installed successfully.
5) If the output is an error code, please consult the [NodeJS installation page](https://nodejs.org/en/download/).

### Yarn
1) Open a `command prompt`/`terminal` window.
2) Type the following and hit enter: `npm install --global yarn`
3) Verify that the installation process has completed successfully:
   1) Type the following and hit enter: `yarn --version`
      1) If the output is something like `1.22.17`, then yarn has installed successfully.
4) If the output is an error code, please consult the [Yarn installation page](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

### Dependencies with Yarn
1) Open a `command prompt`/`terminal` window.
2) Type the following and hit enter: `cd <Project Folder Filepath>`
   1) _For example: [MacOS]_ `cd ~/Downloads/x5`
   2) _For example: [Windows]_ `cd "C:\Users\JohnSmith\Downloads\x5"`
3) Type the following and hit enter: `yarn install` **(The dependencies should begin to install, this could take a few minutes, so boil the kettle while you're at it☕)**
4) There should now be a `node_modules` folder in the project, which contains a lot of dependencies.

---

## Running the Application
1) Open a `command prompt`/`terminal` window.
2) Type the following and hit enter: `yarn start` 
   1) The server will start on your localhost, this could take a few minutes depending on your machine, and **it should open a browser window automatically**.
   2) If after a couple of minutes a window does not appear, navigate to the `command prompt`/`terminal` where you called `yarn start` and you should see URL such as `http://localhost:3000`. Copy that into your browser such as chrome and hit enter.

_Made with ❤ by 2814919 and 2711337_