import type { NextPage } from "next";
import { Client } from '../../types/client';
import { Dog, Gender } from '../../types/dog';
import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DogCard } from "../../ui/DogCard";

const client = new Client(0, "Paul", "Dupont", Gender.Male, "pdupont@cpnv.ch", "+4177123000");

const Dogs = [
  new Dog("1", "Rufus", Gender.Male, new Date("2020-01-01"), "Berger allemand", client),
  new Dog("2", "Duke", Gender.Male, new Date("2018-01-01"), "Berger allemand", client),
  new Dog("3", "Boss", Gender.Male, new Date("2021-12-01"), "Berger allemand", client),
  new Dog("4", "Peppermint", Gender.Female, new Date("2021-12-01"), "Berger allemand", client),
];


const ClientsIndex = () => {
  return <Container maxWidth="lg">
    <Card sx={{ maxWidth: 768, mx: "auto", marginY: 1 }}>
      <CardContent sx={{ paddingX: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {client.firstName} {client.lastName}
          </Grid>
          <Grid item xs={12}>
            Informations de contact
          </Grid>
          <Grid item xs={3}>
            E-mail
          </Grid>
          <Grid item xs={9}>
            {client.email}
          </Grid>
          <Grid item xs={3}>
            Mobile
          </Grid>
          <Grid item xs={9}>
            {client.phone}
          </Grid>
          <Grid item xs={12}>
            Chiens
          </Grid>
          <Grid item xs={12}>
            {Dogs.map(dog => <DogCard dog={dog}></DogCard>)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Container>
};

export default ClientsIndex;