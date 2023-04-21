import React, { useState } from 'react';
import List from './components/list';
import Input from './components/input';

function App() {
    const [, setModalInputValue] = useState('');
    const tasks = [
        {
            id: 1,
            task: 'Danair'
        },
        {
            id: 2,
            task: 'Raimkulov'
        },
        {
            id: 3,
            task: 'Taalaibekovich'
        }
    ];

    const handleModalInputChange = event => {
        setModalInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Tasks:</h1>
            <List tasks={tasks} />
            <button>Open Modal</button>
            <div>
                <h2>Modal</h2>
                <Input
                    name="modalInput"
                    placeholder="Enter task"
                    onChange={handleModalInputChange}
                />
                <button>Add Task</button>
            </div>
        </div>
    );
}

export default App;
