import type { NextPage } from "next";
import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { DogCard } from "../../modules/dog/DogCard";
import { Dog } from "../../modules/dog/dog";

const paul = { firstname: "Paul", lastname: "Dupont", female: false, email: "pdupont@cpnv.ch", phone: "+4177123000" };

const Dogs: Dog[] = [
  { id: "1", noun: "Rufus", female: false, birthdate: new Date("2020-01-01"), breed: "Berger allemand", master: paul, sterilized: false, chemical: false, color: "", dead: false },
  { id: "2", noun: "Duke", female: false, birthdate: new Date("2020-05-01"), breed: "Berger allemand", master: paul, sterilized: false, chemical: false, color: "", dead: false },
  { id: "3", noun: "Boss", female: false, birthdate: new Date("2019-01-01"), breed: "Berger allemand", master: paul, sterilized: false, chemical: false, color: "", dead: false },
  { id: "4", noun: "Peppermint", female: true, birthdate: new Date("2021-01-01"), breed: "Berger allemand", master: paul, sterilized: false, chemical: false, color: "", dead: false },
];

const DogsIndex = () => {
  return <Container maxWidth="lg">
    { Dogs.map(dog => <DogCard dog={dog}></DogCard>) }

    <Fab aria-label="add" style={{position:"absolute", right: 50, bottom: 50}}>
      <AddIcon />
    </Fab>
  </Container>
};

export default DogsIndex;