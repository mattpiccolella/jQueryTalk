#!/bin/bash

cp -R build/* .
python md2html.py Leveling\ Up\ Your\ Apps\ with\ jQuery.md
rm *.css *.js *.py
rm -r markdown tweaks