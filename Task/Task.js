document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function createTaskElement(taskText) {
        
        const li = document.createElement('li');

        
        const span = document.createElement('span');
        span.textContent = taskText;

       
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');

        
        li.appendChild(span);
        li.appendChild(removeButton);

        
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        
        removeButton.addEventListener('click', (event) => {
            event.stopPropagation(); 
            taskList.removeChild(li);
        });

        return li;
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = ''; 
        }
    });

   
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
