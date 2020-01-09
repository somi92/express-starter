import express from 'express';
import cors from 'cors';
import service from './service';

const app = express();
const port = 8080; // default port to listen

app.use(
  cors({
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200,
  }),
);

// define a route handler for the default home page
app.get('/hello', (req, res) => {
  res.json({ data: service });
});

// app.use('/', express.static(path.join(__dirname, 'public')));

// start the Express server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
