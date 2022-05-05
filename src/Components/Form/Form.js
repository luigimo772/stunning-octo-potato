import axios from 'axios';
import React from 'react';
// import Button from '@material-ui/core/Button';

class Form extends React.Component {
    state = {
        npcName: ''
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.get(`https://eldenring.fanapis.com/api/npcs?name=${this.state.npcName}`);
        this.props.onSubmit(res.data.data);
        
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