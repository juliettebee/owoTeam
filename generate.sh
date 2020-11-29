#!/bin/bash
# Deleting public folder
rm -rf public
# Creating public folder
mkdir public
# Creating JS folder
mkdir public/js
# Creating newTeam folder
mkdir public/newTeam
# Converting
haml index.haml > public/index.html
haml newTeam/index.haml > public/newTeam/index.html
# minifying
terser js/index.js -o public/js/index.min.js
terser js/newTeam.js -o public/js/newTeam.min.js
