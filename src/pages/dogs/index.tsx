import type { NextPage } from "next";
import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { DogCard } from "../../modules/dog/DogCard";
import { Dog } from "../../modules/dog/Dog";
import { Gender } from "../../modules/dog/Gender";
import { Sterilization } from "../../modules/dog/Sterilization";

const paul = { firstname: "Paul", lastname: "Dupont", female: false, email: "pdupont@cpnv.ch", phone: "+4177123000" };

const Dogs: Dog[] = [
  { Id: "1", Name: "Rufus", Gender: Gender.Male, Birthdate: new Date("2020-01-01"), BreedName: "Berger allemand", Master: paul, Sterilization: Sterilization.NotSterilized, Color: "", IsDead: false },
  { Id: "2", Name: "Duke", Gender: Gender.Male, Birthdate: new Date("2020-05-01"), BreedName: "Berger allemand", Master: paul, Sterilization: Sterilization.NotSterilized, Color: "", IsDead: false },
  { Id: "3", Name: "Boss", Gender: Gender.Male, Birthdate: new Date("2019-01-01"), BreedName: "Berger allemand", Master: paul, Sterilization: Sterilization.NotSterilized, Color: "", IsDead: false },
  { Id: "4", Name: "Peppermint", Gender: Gender.Female, Birthdate: new Date("2021-01-01"), BreedName: "Berger allemand", Master: paul, Sterilization: Sterilization.NotSterilized, Color: "", IsDead: false },
];

const DogsIndex = () => {
  return <Container maxWidth="lg">
    { Dogs.map(dog => <DogCard key={dog.Id} dog={dog}></DogCard>) }
    <Fab aria-label="add" style={{position:"fixed", right: 50, bottom: 50}}>
      <AddIcon />
    </Fab>
  </Container>
};

export default DogsIndex;