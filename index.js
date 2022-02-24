import express from 'express';

let TASKS = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
];

const PORT = 2345;
const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    resp.send('Hola mundo');
});

app.get('/tasks', (req, resp) => {
    // devolver las tareas
    resp.send(TASKS);
});

app.get('/tasks/:id', (req, resp) => {
    // devolver las tareas
    const result = TASKS.find((item) => +item.id === +req.params.id);
    resp.send(result);
});

app.post('/tasks', (req, resp) => {
    req.body;
    console.log(req.body);
    const newId = Math.max(...TASKS.map((item) => item.id)) + 1;
    const newTask = { ...req.body, id: newId };
    TASKS.push(newTask);
    console.log(TASKS);
    resp.send(newTask);
});

// app.patch();
// app.put();
// app.delete();

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});
