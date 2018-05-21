#!/bin/bash
cat ../README.md | marked -o temp.html
echo "<html><body style='font-family:-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;padding:20px'>" > readme.html
cat temp.html >> readme.html
echo "</body></html>" >> readme.html
