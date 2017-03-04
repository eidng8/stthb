#!/usr/bin/env bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT=$(dirname "$CWD")

# fix JetBrain products from using the deprecated stylelint cli
STYLELINT="$ROOT/node_modules/stylelint"
# make sure stylelint installed
if [ -d "$STYLELINT" ]; then
  if [ ! -e "$STYLELINT/dist/cli.js" ]; then
    # create a symlink to fix it
    mkdir -p "$STYLELINT/dist"
    cd "$STYLELINT/dist"
    ln -s ../bin/stylelint.js cli.js
  fi
fi
