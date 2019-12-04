#!/bin/bash

npm install
polymer build
#cp include/npm/index.* node_modules;
#(cd node_modules; polymer build);
#rsync -a node_modules/build/default/\@vaadin/ src/
rsync -a --exclude polymer --exclude mode_modules build/default/node_modules/@vaadin/ src/
rm -rf src/*/node_modules

for i in `grep -rl '"../../../../@polymer/' src`;
do
  perl -spi -e 's/..\/..\/..\/..\/\@polymer/\@polymer/g' "$i";
done
for i in `grep -rl '"../../../@polymer/' src`;
do
  perl -spi -e 's/..\/..\/..\/\@polymer/\@polymer/g' "$i";
done
for i in `grep -rl '"../../@polymer/' src`;
do
  perl -spi -e 's/..\/..\/\@polymer/\@polymer/g' "$i";
done

cp include/src/index.js src/

pika build;
#cp include/package/pkg/package.json pkg/package.json