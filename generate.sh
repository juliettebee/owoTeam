#!/bin/bash
# Deleting public folder
rm -rf public
# Creating public folder
mkdir public
# Creating JS folder
mkdir public/js
# Creating newTeam folder
mkdir public/newTeam
# Creating generateCommand folder
mkdir public/generateCommand
# Converting
haml index.haml > public/index.html
haml newTeam/index.haml > public/newTeam/index.html
haml generateCommand/index.haml > public/generateCommand/index.html
# minifying
terser js/index.js -o public/js/index.min.js -c -m 
terser js/newTeam.js -o public/js/newTeam.min.js -c -m
terser js/functions.js -o public/js/functions.min.js -c -m
terser js/generateTeam.js -o public/js/generateTeam.min.js -c -m
