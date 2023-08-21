import express from 'express';

const grades = {};
let nextId = 1;

const app = express();
const port = 8080;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const gradeId in grades) {
    gradeArray.push(grades[gradeId]);
  }
  res.json(gradeArray);
});

app.post('/api/grades', (req, res) => {
  const { name, score } = req.body;
  const newEntry = {
    id: nextId,
    name,
    score,
  };
  grades[nextId] = newEntry;
  nextId++;
  res.status(201).json(newEntry);
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
