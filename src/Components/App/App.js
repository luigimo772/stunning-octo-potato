import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import NPCCardList from '../NPCCardList/NPCCardList';
import Form from '../Form/Form';
import { useState } from 'react';

function App() {
  const [npcs, setNPCs] = useState([]);
  const addNewNPC = (newNPCData) => {
    setNPCs([...npcs, newNPCData[0]]);
  }; 
  return (
    <Container className="App">
      <Typography variant="h3">
        Elden Ring NPCs
      </Typography>
      <Form onSubmit={addNewNPC}/>
      <NPCCardList allNPCs={npcs}/>
    </Container>
  );
}

export default App;
