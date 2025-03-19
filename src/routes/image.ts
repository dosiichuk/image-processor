import { Router, Request, Response } from 'express';
import { resizeImage } from '../utils/imageProcessor';

const router = Router();

interface ResizeQuery {
  filename: string;
  width: string;
  height: string;
}

router.get('/images', async (req: Request, res: any) => {
  const { filename, width, height } = req.query as unknown as ResizeQuery;

  if (!filename || !width || !height) {
    return res.status(400).send('Invalid query parameters');
  }
  try {
    const imageBuffer = await resizeImage(
      filename as string,
      parseInt(width as string),
      parseInt(height as string),
    );
    res.type('image/jpeg');
    res.send(imageBuffer);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send('Error processing image');
  }
});

export default router;
