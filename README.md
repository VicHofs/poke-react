# Poké React
<div display="flex" align="center">
	<img src="https://github.com/VicHofs/poke-react/blob/master/gh-assets/overview.gif" />
</div>
<p align="center">
  <a href="https://www.linkedin.com/in/victor-hofstetter/">
    <img alt="Made by VicHofs" src="https://img.shields.io/badge/made%20by-VicHofs | hv90 | sapucaialuann-%2304D361">
  </a>

  <a href="https://github.com/VicHofs/poke-react/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VicHofs/poke-react">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
<p align="center">
	
## Why SSR (Server Side Rendering)?
All data will be pre-rendered by the server side before the client receives it, 
which improves the application's performance and the user experience.
You can see how this works by yourself by disabling JavaScript in your browser settings.
You'll still get the pre-rendered HTML and CSS files, but the application won't be interactive, since it needs live JavaScript for that purpose.


## :whale: Getting started with Poké React SSR on Docker

First, clone the project 

``` bash
git clone https://github.com/hv90/poke-react.git && cd poke-react
```
Then run `docker-compose`

```bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with a browser to see the result.


## 📝 Project

A PokéDex-like React app

[Click Here][website] to check it out!

<img alt="PokéApi" src="https://pokeapi.co/static/pokeapi_256.888baca4.png">

_All data is pulled from the PokéApi API._

Use the search bar to look up a Pokémon—as of right now, searches need to match the Pokémon's name perfectly—and get its sprite, PokéDex ID and description.

There is support for multiple languages—spanning across different games—pertaining to descriptions.

Dark mode toggles automatically depending on the user's system preferences.

## 🗃 Technologies

This project was developed with the following technologies:

- [JavaScript][javascript]
- [ReactJS][reactjs]
- [Insomnia][insomnia]
- [PokéApi][pokeapi]
- [Docker][docker]
- [ExpressJS][express]
- [WebpackJS][webpack]
- [BabelJS][babel]

## 📋 Layout
This is a SPA comprised of a header, search bar and pokémon cards resulting from searches.
<img src="https://github.com/VicHofs/poke-react/blob/master/gh-assets/overview.png" />

## 📜 License

This project is under the MIT license. See the [LICENSE](https://github.com/VicHofs/poke-react/LICENSE) for details.




Made with ❤ by Victor Hofstetter, Luann Sapucaia and Hugo Almeida at Hicom IT Brazil.

[javascript]: https://www.typescriptlang.org/
[reactjs]: https://reactjs.org
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[pokeapi]: https://pokeapi.co/
[express]: https://expressjs.com/
[insomnia]: https://insomnia.rest
[docker]: https://www.docker.com/
[website]: https://vichofs.github.io/poke-react/
[webpack]: https://webpack.js.org/
[babel]: https://babeljs.io/

