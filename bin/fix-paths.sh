#!/bin/bash

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