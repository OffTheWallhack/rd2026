#!/bin/sh
# src/*.js (čitateľný zdroják) -> game.js (zmenšená verzia, ktorú načíta stránka)
# Použitie:  npm i   &&   ./build.sh
set -e
cd "$(dirname "$0")"
npx esbuild src/game.js --bundle --minify --format=iife --target=es2020 --legal-comments=eof --charset=utf8 --outfile=game.js --log-level=warning
