import type { NextPage } from "next";
import { DogCard } from  '../../ui/DogCard';
import { Dog, Gender } from '../../types/dog';
import { Client } from '../../types/client';
import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const paul = new Client("Paul", "Dupont", Gender.Male, "pdupont@cpnv.ch", "+4177123000");

const Dogs = [
  new Dog("1", "Rufus", Gender.Male, new Date("2020-01-01"), "Berger allemand", paul),
  new Dog("2", "Duke", Gender.Male, new Date("2018-01-01"), "Berger allemand", paul),
  new Dog("3", "Boss", Gender.Male, new Date("2021-12-01"), "Berger allemand", paul),
  new Dog("4", "Peppermint", Gender.Female, new Date("2021-12-01"), "Berger allemand", paul),
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