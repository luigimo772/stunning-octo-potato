import axios from 'axios';
import React from 'react';

class Form extends React.Component {
    state = {
        npcName: ''
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        // todo: move call to separate module
        const res = await axios.get(`https://eldenring.fanapis.com/api/npcs?name=${this.state.npcName}`);
        if (res.data.data[0] !== undefined) {
            this.props.onSubmit(res.data.data[0]);
        };

        // clear npc name
        this.setState({
            npcName: ''
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.npcName}
                    onChange={event => this.setState({npcName: event.target.value})}
                    placeholder="NPC name" 
                    required
                />
                <button>Add NPC</button>
            </form>
        );
    }
}

export default Form;