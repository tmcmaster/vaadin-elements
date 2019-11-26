#!/bin/bash

npm install
cp include/npm/index.* node_modules;
(cd node_modules; polymer build);
rsync -a node_modules/build/default/\@vaadin/ src/

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