# Image Resizer App

This application allows you to resize images by requesting the image through URL query params. The requests should be directed to http://localhost:3000/api/images?filename=?&height=?&width=?
The server works only for .jpg files and is using Sharp lib.
It includes a caching mechanism to check whether a resized image already exists. If the size corresponds to the size of the original image, it is served instead.

## Features
- Resize images to various dimensions
- Caching to avoid redundant resizing

## Endpoint made available in the API
http://localhost:3000/api/images?filename=?&height=?&width=?
Where:
String filename - string parameter corresponding to an image existing in the assets/full folder. If the image does not exist, the server will return an Error.
Number height, width - height and width parameters in px, which should be used to resize the image. If a resized image with such parameters exists, it will be served from either assets/full or assets/thumb folder.

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

## To run production server
First build using
```bash
npm run build
```
Then launch the prod server using
```bash
node dist/index.js
```

## Code Formatting

To format the code using Prettier, use the following command:

```bash
npm run prettier
```