import { Router, Request, Response } from 'express';
import { resizeImage } from '../utils/imageProcessor';

const router = Router();

interface ResizeQuery {
  filename: string;
  width: string;
  height: string;
}

router.get('/images', async (req: Request, res: Response) => {
  const { filename, width, height } = req.query as unknown as ResizeQuery;
  try {
    const imageBuffer = await resizeImage(
      filename as string,
      parseInt(width as string),
      parseInt(height as string),
    );
    res.type('image/jpeg');
    res.send(imageBuffer);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send('Error processing image');
    } else {
      console.log('Unknown error occurred');
      res.status(500).send('An unknown error occurred');
    }
  }
});

export default router;
