import React from 'react';

function Stats(props) {
    const total = props.todos.length;
    const completed = props.todos.filter(todo => todo.completed).length;
    const uncompleted = total - completed;

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Total tasks:</th>
                    <td>{total}</td>
                </tr>

                <tr>
                    <th>Completed:</th>
                    <td>{completed}</td>
                </tr>

                <tr>
                    <th>Uncompleted:</th>
                    <td>{uncompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default Stats;