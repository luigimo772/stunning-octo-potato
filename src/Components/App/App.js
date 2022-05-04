// import logo from './../../logo.svg';
import './App.css';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import NPCCardList from '../NPCCardList/NPCCardList';
import Form from '../Form/Form';
import { useState } from 'react';

const testData = [
  {"id":"17f69a221c9l0i2ojlqe4t4u5lk6pc",
  "name":"Merchant Kalé",
  "image":"https://eldenring.fanapis.com/images/npcs/17f69a221c9l0i2ojlqe4t4u5lk6pc.png",
  "quote":null,
  "location":"Limgrave, Church of Elleh",
  "role":" General Goods Shop"},
  {"id":"17f69ddf39dl0i2ojm1riku8s6qxfs",
  "name":"Sorceress Sellen",
  "image":"https://eldenring.fanapis.com/images/npcs/17f69ddf39dl0i2ojm1riku8s6qxfs.png",
  "quote":null,
  "location":"Limgrave, Waypoint Ruins",
  "role":"Sorceries Shop"},
];

function App() {

  const [profiles, setProfiles] = useState(testData);

  return (
    <Container className="App">
      <Typography variant="h3">
        Elden Ring NPCs
      </Typography>
      <Form />
      <NPCCardList npcData={profiles} />
    </Container>
  );
}

export default App;
