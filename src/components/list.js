import React from 'react';

function List(props) {
    const { tasks } = props;
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.task}</li>
            ))}
        </ul>
    );
}

export default List;
