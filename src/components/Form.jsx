import React from 'react';

import Button from './Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    }

    handleChange(event) {
        const title = event.target.value;

        this.setState({ title });
    }

    render() {
        return(
            <form className="todo-add-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.title}
                    placeholder="What you need to do?"
                    onChange={this.handleChange} />

                <Button type="submit">Add</Button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: React.PropTypes.func.isRequired
};

export default Form;