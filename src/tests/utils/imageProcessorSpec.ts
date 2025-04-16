import fs from 'fs/promises';
import path from 'path';

import { resizeImage } from '../../utils/imageProcessor';

describe('Image Processor', () => {
  it('should return an image from the "full" folder \
        if there is an image with parameters equal to query params', async () => {
    const filename = 'kikuno';
    const width = 400;
    const height = 400;
    const imageBuffer = await resizeImage(filename, width, height);
    expect(imageBuffer).toBeInstanceOf(Buffer);
    expect(imageBuffer.length).toBeGreaterThan(0);
  });

  it('should return an image from the "thumb" folder \
        if there is an image with parameters equal to query params', async () => {
    const filename = 'kikuno';
    const width = 400;
    const height = 400;
    const imageBuffer = await resizeImage(filename, width, height);
    expect(imageBuffer).toBeInstanceOf(Buffer);
    expect(imageBuffer.length).toBeGreaterThan(0);
  });

  it('should create a new image in the "thumb" folder \
        if there is no image with parameters equal to query params', async () => {
    const filename = 'kikuno';
    const width = 800;
    const height = 800;
    const imageBuffer = await resizeImage(filename, width, height);
    expect(imageBuffer).toBeInstanceOf(Buffer);
    expect(imageBuffer.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    try {
      await fs.unlink(
        path.join(__dirname, '../../../dist/assets/thumb/kikuno_thumb.jpg'),
      );
    } catch (error) {
      console.error('Error deleting the file:', error);
    }
  });
});
