#!/usr/bin/env node
install:
	npm install
	npm i @babel/core, @babel/cli, @babel/node, @babel/preset-env --save-dev
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish