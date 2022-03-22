import type { NextPage } from "next";
import { Client } from "../../types/client";
import { Dog, Gender } from "../../types/dog";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DogCard } from "../../ui/DogCard";

const client: Client = {
  id: 0,
  firstname: "Paul",
  lastname: "Dupont",
  gender: "male",
  email: "pdupont@cpnv.ch",
  phone: "+4177123000",
};

const Dogs = [
  new Dog(
    "1",
    "Rufus",
    Gender.Male,
    new Date("2020-01-01"),
    "Berger allemand",
    client,
  ),
  new Dog(
    "1",
    "Rufus",
    Gender.Male,
    new Date("2020-01-01"),
    "Berger allemand",
    client,
  ),
  new Dog(
    "1",
    "Rufus",
    Gender.Male,
    new Date("2020-01-01"),
    "Berger allemand",
    client,
  ),
  new Dog(
    "1",
    "Rufus",
    Gender.Male,
    new Date("2020-01-01"),
    "Berger allemand",
    client,
  ),
];

const ClientView = () => {
  return (
    <Container maxWidth="lg">
      <Card sx={{ maxWidth: 768, mx: "auto", marginY: 1 }}>
        <CardContent sx={{ paddingX: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>
              {client.firstname} {client.lastname}
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
              {Dogs.map((dog) => (
                <DogCard key={dog.id} dog={dog}></DogCard>
              ))}
            </Grid>
            <Grid item xs={12}>
              Consultations
            </Grid>
            <Grid item xs={12}>
              {/* Add consultations when model is created */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ClientView;
