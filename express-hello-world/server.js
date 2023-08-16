import express from 'express';

const app = express();
app.use((req, res, next) => {
  console.log(req.method);
  res.send('Potato Stix does the Trix');
});

app.listen(8080, () => {
  console.log('server is listening');
});
