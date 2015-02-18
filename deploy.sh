#! /bin/bash

./build.sh
zip -r code.zip code
scp "Leveling Up Your Apps with jQuery.html" adi-website:/srv/learn/public_html/jquery/index.html
scp code.zip adi-website:/srv/learn/public_html/jquery/code.zip
rm -f code.zip