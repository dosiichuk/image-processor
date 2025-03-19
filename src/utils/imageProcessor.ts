import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

export const resizeImage = async (
  filename: string,
  width: number,
  height: number,
): Promise<Buffer> => {
  const imagePath = path.join(__dirname, '../assets/full', filename + '.jpg');
  const metadata = await sharp(imagePath).metadata();
  if (metadata.width === width && metadata.height === height) {
    return await fs.readFile(imagePath);
  }
  const imageFound = await fs
    .access(path.join(__dirname, '../assets/thumb', filename + '_thumb.jpg'))
    .then(() => true)
    .catch(() => false);
  const metadataThumb = await sharp(imagePath).metadata();
  if (
    imageFound &&
    metadataThumb.width === width &&
    metadataThumb.height === height
  ) {
    return await fs.readFile(
      path.join(__dirname, '../assets/thumb', filename + '_thumb.jpg'),
    );
  }
  const thumbnailPath = path.join(
    __dirname,
    '../assets/thumb',
    `${filename}` + '_thumb.jpg',
  );

  const resizedImage = await sharp(imagePath).resize(width, height).toBuffer();
  await fs.writeFile(thumbnailPath, resizedImage);
  return resizedImage;
};
