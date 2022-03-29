import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { ClientCard } from '../../modules/clients/ClientCard';

const clients = [
    {id: 1, firstname: "Paul", lastname: "Dupont", gender: "Male", email: "pdupont@cpnv.ch", phone: "+4177123000"},
    {id: 2, firstname: "Pierrot", lastname: "Lemec", gender: "Male", email: "plemec@cpnv.ch", phone: "+4177123001"},
    {id: 3, firstname: "Frank", lastname: "Dupond", gender: "Male", email: "fdupond@cpnv.ch", phone: "+4177123002"},
    {id: 4, firstname: "Jacque", lastname: "Trousse", gender: "Male", email: "jtrousse@cpnv.ch", phone: "+4177123003"},
    {id: 5, firstname: "Atche", lastname: "Oum", gender: "Male", email: "aoum@cpnv.ch", phone: "+4177123004"},
    {id: 6, firstname: "Pat", lastname: "Atte", gender: "Male", email: "patte@cpnv.ch", phone: "+4177123005"},
    {id: 7, firstname: "Phiste", lastname: "Land", gender: "Male", email: "pland@cpnv.ch", phone: "+4177123006"},
    {id: 8, firstname: "Ommy", lastname: "Kron", gender: "Male", email: "okron@cpnv.ch", phone: "+4177123007"},
    {id: 9, firstname: "Taqute", lastname: "Til", gender: "Male", email: "ttil@cpnv.ch", phone: "+4177123008"},
    {id: 10, firstname: "Mick", lastname: "Mack", gender: "Male", email: "mmack@cpnv.ch", phone: "+4177123009"},
    {id: 11, firstname: "Trow", lastname: "Kon", gender: "Male", email: "tkon@cpnv.ch", phone: "+4177123010"},
];

const DogsIndex = () => {
  Clients();
  return <Container maxWidth="lg">
    { clients.map(client => <ClientCard key={client.id} client={client}></ClientCard>) }  

    <Fab aria-label="add" className="fixed right-[50px] bottom-[50px]">
      <AddIcon />
    </Fab>
  </Container>
};

export default DogsIndex  ;

function Clients() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8000/clients', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': 'ITS_TIME_TO_MICKEY_DANCE'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}