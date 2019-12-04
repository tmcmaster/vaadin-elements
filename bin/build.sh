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

for i in `grep -rl '"@polymer\/iron-a11y-announcer\/iron-a11y-announcer.js' src`;
do
  perl -spi -e 's/\@polymer\/iron-a11y-announcer\/iron-a11y-announcer.js/\@wonkytech\/polymer-elements/g' "$i";
done

for i in `grep -rl '"@polymer\/iron-a11y-keys-behavior\/iron-a11y-keys-behavior.js' src`;
do
  perl -spi -e 's/\@polymer\/iron-a11y-keys-behavior\/iron-a11y-keys-behavior.js/\@wonkytech\/polymer-elements/g' "$i";
done

for i in `grep -rl '"@polymer\/iron-resizable-behavior\/iron-resizable-behavior.js' src`;
do
  perl -spi -e 's/\@polymer\/iron-resizable-behavior\/iron-resizable-behavior.js/\@wonkytech\/polymer-elements/g' "$i";
done

for i in `grep -rl '"@polymer\/iron-list\/iron-list.js' src`;
do
  perl -spi -e 's/\@polymer\/iron-list\/iron-list.js/\@wonkytech\/polymer-elements/g' "$i";
done

for i in `grep -rl '"@polymer\/iron-media-query\/iron-media-query.js' src`;
do
  perl -spi -e 's/\@polymer\/iron-media-query\/iron-media-query.js/\@wonkytech\/polymer-elements/g' "$i";
done

for i in `grep -rl '"@polymer\/iron-scroll-target-behavior\/iron-scroll-target-behavior.js' src`;
do
  perl -spi -e 's/\@polymer\/iron-scroll-target-behavior\/iron-scroll-target-behavior.js/\@wonkytech\/polymer-elements/g' "$i";
done

for i in `grep -rl '"@polymer\/iron-icon\/iron-icon.js' src`;
do
  perl -spi -e 's/\@polymer\/iron-icon\/iron-icon.js/\@wonkytech\/polymer-elements/g' "$i";
done

for i in `grep -rl '"@polymer\/iron-iconset-svg\/iron-iconset-svg.js' src`;
do
  perl -spi -e 's/\@polymer\/iron-iconset-svg\/iron-iconset-svg.js/\@wonkytech\/polymer-elements/g' "$i";
done

cp include/src/index.js src/

pika build;
#cp include/package/pkg/package.json pkg/package.json