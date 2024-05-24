To generate pdf:

```sh
sudo pdflatex img.tex
```

To convert pdf to image with imageMagick:

```sh
convert -density 600x600 img.pdf -quality 90 -resize 800x600 pic.png
```
