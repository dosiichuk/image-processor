import express from 'express';
import imageRouter from './routes/image';


const app = express();
const port = 3000;

app.use('/api', imageRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});