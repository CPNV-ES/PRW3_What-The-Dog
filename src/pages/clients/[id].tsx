import type { NextPage } from "next";
import { Client } from "../../types/client";
import { Dog } from "../../modules/dog/Dog";
import { Gender } from "../../modules/dog/Gender";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DogCard } from "../../ui/DogCard";
import Edit from "@mui/icons-material/Edit";
import { Link } from "../../ui/core/Link";
import { Sterilization } from "../../modules/dog/Sterilization";

const paul: Client = {
  id: 0,
  firstname: "Paul",
  lastname: "Dupont",
  gender: "male",
  email: "pdupont@cpnv.ch",
  phone: "+4177123000",
};

const Dogs: Dog[] = [
  { id: "1", name: "Rufus", gender: Gender.Male, birthdate: new Date("2020-01-01"), breedName: "Berger allemand", master: paul, sterilization: Sterilization.NotSterilized, color: "", isDead: false },
  { id: "2", name: "Duke", gender: Gender.Male, birthdate: new Date("2020-05-01"), breedName: "Berger allemand", master: paul, sterilization: Sterilization.NotSterilized, color: "", isDead: false },
  { id: "3", name: "Boss", gender: Gender.Male, birthdate: new Date("2019-01-01"), breedName: "Berger allemand", master: paul, sterilization: Sterilization.NotSterilized, color: "", isDead: false },
  { id: "4", name: "Peppermint", gender: Gender.Female, birthdate: new Date("2021-01-01"), breedName: "Berger allemand", master: paul, sterilization: Sterilization.NotSterilized, color: "", isDead: false },
];

const ClientView = () => {
  return (
    <Container maxWidth="lg">
      <Card sx={{ maxWidth: 768, mx: "auto", marginY: 1 }}>
        <CardContent sx={{ paddingX: 2 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={11}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
              }}
            >
              {paul.firstname} {paul.lastname}
            </Grid>
            <Grid item xs={1}>
              <Link href="/clients/123/edit">
                <Edit style={{ color: "#7BD7FF" }} />
              </Link>
            </Grid>
            <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold" }}>
              Informations de contact
            </Grid>
            <Grid item xs={3} style={{ paddingLeft: 35 }}>
              E-mail
            </Grid>
            <Grid item xs={9}>
              {paul.email}
            </Grid>
            <Grid item xs={3} style={{ paddingLeft: 35 }}>
              Mobile
            </Grid>
            <Grid item xs={9}>
              {paul.phone}
            </Grid>
            <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold" }}>
              Chiens
            </Grid>
            <Grid item xs={12}>
              {Dogs.map((dog) => (
                <DogCard key={dog.id} dog={dog}></DogCard>
              ))}
            </Grid>
            <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold" }}>
              Consultations
            </Grid>
            <Grid item xs={12}>
              {/* Add consultations when model is created */}
              {Dogs.map((dog) => (
                <DogCard key={dog.id} dog={dog}></DogCard>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ClientView;
