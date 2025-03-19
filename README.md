# Image Resizer App

This application allows you to resize images by requesting the image through URL query params. The requests should be directed to /api/images?filename=?&height=?&width=?
The server works only for .jpg files and is using Sharp lib.
It includes a caching mechanism to check whether a resized image already exists. If the size corresponds to the size of the original image, it is served instead.

## Features
- Resize images to various dimensions
- Caching to avoid redundant resizing


## Installation

To install the dependencies, run the following command:

```bash
npm install
```

## Build

To build the application, use the following command:

```bash
npm run build
```

This will compile the TypeScript code into JavaScript and output it to the `build` directory.

## Code Formatting

To format the code using Prettier, use the following command:

```bash
npm run prettier
```