install:
	npm install
start:
	npx babel-node -- src/bin/brain-even.js
publish:
	npm publish
build:
	rm -rf dist
	npm run build
lint:
	npx eslint .
