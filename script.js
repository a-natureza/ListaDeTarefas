document.getElementById('add-task-btn').addEventListener('click', function() {
    var input = document.getElementById('task-input');
    var taskText = input.value.trim();
    
    if (taskText.length) {
        var taskList = document.getElementById('task-list');
        var taskItem = document.createElement('li');
        
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskItem.classList.add('done');
            } else {
                taskItem.classList.remove('done');
            }
        });
        
        var textNode = document.createElement('span');
        textNode.classList.add('task-text');
        textNode.textContent = taskText;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(textNode);
        
        taskList.appendChild(taskItem);
        input.value = '';
    } else {
        alert('Digite uma tarefa');
    }
});

document.getElementById('task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('add-task-btn').click();
    }
});
