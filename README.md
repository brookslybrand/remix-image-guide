# Remix Image Strategies

This is a WIP repo. Here are some things I'm going to try

## Sharp

[sharp](https://github.com/lovell/sharp) is library for "High performance Node.js image processing". There is already an official [Remix example](https://github.com/remix-run/examples/tree/main/image-resize) using it, though it could be improved.

## Unpic

[Unpic](https://unpic.pics/img/react/) seems like a nice option if you're already using an image CDN (which you probably should be unless you really want to be building your own).

## Remix-Image

[Remix-Image](https://remix-image.mcfarl.in) unfortunately [hasn't been updated in a bit](https://github.com/Josh-McFarlin/remix-image/releases/tag/v1.3.3), so I am really not confident about it as a solution. However, probably good to rule it out

## vite-plugin-image-optimizer

[vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer) allows optimizing all images at build time, which for public assets may be what you want
