import { useState } from "react"
import classNames from 'classnames';


export default function App() {
    const [todo, setTodo] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    }

    const handleAddClick = () => {
        if (todo === '') {
            return;
        }

        setTasks([...tasks, { name: todo, crossed: false}]);
        setTodo('');
    }

    const handleTaskClick = (index) => {
        const newTasks = [...tasks];
        newTasks[index].crossed = !newTasks[index].crossed; 
        setTasks(newTasks);

    }

    let remaining = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].crossed === false) {
            remaining = remaining + 1;
        }
    }

    return (
        <>
            <div>
                <h2>
                    Todo List
                </h2>
                <input type="text" name='list-item' value={todo} onChange={handleTodoChange} />
                <button onClick={handleAddClick}>Add</button>
                <div className="task-counter">
                    {remaining} remaining out of {tasks.length} tasks
                </div>

                <ul>
                    {tasks.map((task, index) => {
                        const handleClick = () => handleTaskClick(index);
                        return <li  className={classNames({'is-done': task.crossed})} key={index} onClick={(handleClick)}>{task.name}</li>
                    })}
                </ul>
             
            </div>
            <style>{`
            .is-done {
                text-decoration: line-through;
            }
        `}</style>
        </>
    )
}