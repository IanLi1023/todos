const $container = document.querySelector('.container');
const $todoInput = document.querySelector('.todoText');
const $submitBtn = document.querySelector('.submitTodo');

$submitBtn.addEventListener('click', function () {
    const todoText = $todoInput.value;
    fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: todoText,
        })
    }).then(res => res.json())
        .then(todos => {
            console.log(todos);
            const $h1 = document.createElement('h1');
            const $p = document.createElement('p');
            const $hr = document.createElement('hr');
            $h1.textContent = todos.text;
            $p.textContent = todos.id;
            $container.appendChild($h1);
            $container.appendChild($p);
            $container.appendChild($hr);
        })
});


fetch('/api/todos')
    .then(res => res.json())
    .then(todos => {
        todos.forEach(todos => {
            const $h1 = document.createElement('h1');
            const $p = document.createElement('p');
            const $hr = document.createElement('hr');
            $h1.textContent = todos.text;
            $p.textContent = todos.id;
            $container.appendChild($h1);
            $container.appendChild($p);
            $container.appendChild($hr);

        });
    });