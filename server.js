
import express from 'express';

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());
app.use(express.static('public'));

const projects = [];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/projects', (req, res) => {
  const { name, status } = req.body;

  if (!name?.trim() || !status?.trim()) {
    return res.status(400).json({
      error: 'Project name and status are required.'
    });
  }

  const project = {
    id: projects.length + 1,
    name: name.trim(),
    status: status.trim()
  };

  projects.push(project);
  res.status(201).json(project);
});

app.listen(port, () => {
  console.log(`Open http://localhost:${port}`);
});
