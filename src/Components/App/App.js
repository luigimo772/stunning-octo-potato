// import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import NPCCardList from '../NPCCardList/NPCCardList';
import Form from '../Form/Form';
import { useState } from 'react';

function App() {
  const [npcs, setNPCs] = useState([]);
  const addNewNPC = (newNPCData) => {
    setNPCs([newNPCData[0], ...npcs]);
  }; 
  return (
    <Container align='center'>
      <Typography variant="h3" gutterBottom>
        Elden Ring NPCs
      </Typography>
      <Form onSubmit={addNewNPC}/>
      <br />
      <NPCCardList allNPCs={npcs}/>
    </Container>
  );
}

export default App;
