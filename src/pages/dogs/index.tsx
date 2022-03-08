import type { NextPage } from "next";
import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { DogCard } from "../../modules/dog/DogCard";
import { Dog } from "../../modules/dog/Dog";
import { Gender } from "../../modules/dog/Gender";
import { Sterilization } from "../../modules/dog/Sterilization";

const paul = { firstname: "Paul", lastname: "Dupont", female: false, email: "pdupont@cpnv.ch", phone: "+4177123000" };

const Dogs: Dog[] = [
  { id: "1", name: "Rufus", gender: Gender.Male, birthdate: new Date("2020-01-01"), breedName: "Berger allemand", master: paul, sterilization: Sterilization.NotSterilized, color: "", isDead: false },
  { id: "2", name: "Duke", gender: Gender.Male, birthdate: new Date("2020-05-01"), breedName: "Berger allemand", master: paul, sterilization: Sterilization.NotSterilized, color: "", isDead: false },
  { id: "3", name: "Boss", gender: Gender.Male, birthdate: new Date("2019-01-01"), breedName: "Berger allemand", master: paul, sterilization: Sterilization.NotSterilized, color: "", isDead: false },
  { id: "4", name: "Peppermint", gender: Gender.Female, birthdate: new Date("2021-01-01"), breedName: "Berger allemand", master: paul, sterilization: Sterilization.NotSterilized, color: "", isDead: false },
];

const DogsIndex = () => {
  return <Container maxWidth="lg">
    { Dogs.map(dog => <DogCard key={dog.id} dog={dog}></DogCard>) }
    <Fab aria-label="add" className="fixed right-12 bottom-12">
      <AddIcon />
    </Fab>
  </Container>
};

export default DogsIndex;