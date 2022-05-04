import React from 'react';
// import Button from '@material-ui/core/Button';

class Form extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("event");
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="NPC name"/>
                <button>Add NPC</button>
            </form>
        );
    }
}

export default Form;