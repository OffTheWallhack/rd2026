#!/bin/bash
# game.src.js (čitateľný zdroják) -> game.js (zmenšená verzia, ktorú načíta stránka)
# Použitie:  npm i -g esbuild  &&  ./build.sh
set -e
cd "$(dirname "$0")"
node --check game.src.js
esbuild game.src.js --minify --legal-comments=eof --charset=utf8 --outfile=game.js --log-level=warning
