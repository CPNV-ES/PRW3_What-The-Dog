import type { NextPage } from "next";
import { Client } from '../../types/client';
import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Consultation } from "../../modules/consultation/consultation";
import { Card } from "../../modules/consultation/ConsultationCard";

const paul = { id: "1", firstname: "Paul", lastname: "Dupoont", gender: "Male", email: "pdupont@cpnv.ch", phone: "+4177123000" };

const Consultations: Consultation[] = [
  { id: "1", situation: "Rufus est un chien indiscipliné, il adore sauter sur la table et voler les restes", goal: "l'aider à arrêter", deadline: new Date("2020-01-01") },
  { id: "2", situation: "Duke n'est pas dans son assiette", goal: "l'aider à arrêter", deadline: new Date("2020-01-01") },
  { id: "3", situation: "Bosse", goal: "", deadline: new Date("2020-01-01") },
  { id: "4", situation: "Peppermint", goal: "", deadline: new Date("2020-01-01") },
];

const Index = () => {
  return <Container maxWidth="lg">
    { Consultations.map(consultation => <Card key={consultation.id} consultation={consultation}></Card>) }
    <Fab aria-label="add" className="fixed right-12 bottom-12">
      <AddIcon />
    </Fab>
  </Container>
};

export default Index;