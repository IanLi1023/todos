const express = require('express');

const { todos, uuid } = require('./db/todos');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static('public')); 

app.use(express.json());
app.use(express.urlencoded( { extended: true}));

app.use(function(req, res, next) {
    req.kobe = 'Champion'
    next()
});

const checkBodyForText = (req, res, next) => {
    if (req.body.text.length === 0) {
        res.status(401).json({ error: 'You must pass text to create a todo'});
    } else {
        next();
    }
};

app.get('/api/todos', (req, res) => {
    console.log(req.method, 'Kobe is the goat');

    res.json(todos);
});

app.post('/api/todos', checkBodyForText, (req, res) => {
    console.log(req.kobe);
    const newTodo = {
        text: req.body.text,
        id: uuid(),
    };
    todos.push(newTodo); 
    res.json(newTodo);
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)); 