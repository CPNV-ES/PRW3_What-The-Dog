import { Container, MenuItem } from "@mui/material";
import { Form } from "../../ui/form/Form";
import { z } from "zod";
import Button from '@mui/material/Button';

export const ServiceSchema = z.object({
  bithdate: z.date(),
  name: z.string(),
  gender: z.string(),
  sterilization: z.string(),
});

const DogsCreate = () => {
  function handleSubmit(data: z.infer<typeof ServiceSchema>) {}
  
  return <Container maxWidth="lg">
    <Form className="h-full px-5 py-8 text-xl" schema={ServiceSchema} onSubmit={handleSubmit}>
      <h1 className="mb-5">{"Création d'un service"}</h1>
      <div className="grid grid-cols-12 space-y-3">

        <Form.TextField name="name" label="Nom" defaultValue={""} className="col-span-8 mt-[12px] mr-3" />

        <Form.Select name="gender" label="Sexe" defaultValue={"F"} className="col-span-4">
          <MenuItem value="F">Femelle</MenuItem>
          <MenuItem value="M">Mâle</MenuItem>
        </Form.Select>
        
        <Form.DatePicker name="birthdate" label="Anniversaire" className="col-span-12" />
        
        <Form.Select name="sterilization" label="Stérilisation" defaultValue={"no"} className="col-span-12">
          <MenuItem value="no">Non-stérilisé</MenuItem>
          <MenuItem value="chem">Chimique</MenuItem>
          <MenuItem value="other">Autre</MenuItem>
        </Form.Select>
      </div>

      <Button variant="contained" color="primary" className="w-full p-5 mt-16 bg-blue-700" type="submit">Ajouter</Button>
    </Form>
  </Container>  
};

export default DogsCreate;