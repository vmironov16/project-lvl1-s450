install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish
build:
	rm -rf dist
	npm run build
