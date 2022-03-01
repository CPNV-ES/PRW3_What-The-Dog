import type { NextLayoutPage } from 'next'
import { MenuItem } from "@mui/material";
import { z } from "zod";
import { Form } from '../../ui/form/Form'

export const ServiceSchema = z.object({
  date: z.date(),
  time: z.string(),
  type: z.string(),
  description: z.string(),
  street: z.string(),
  npa: z.string(),
  canton: z.string(),
  dogs: z.string(),
});

const Service: NextLayoutPage = () => {

  function handleSubmit(data: z.infer<typeof ServiceSchema>) {
   console.log(data);
  }


  return (
    <Form className="bg-cyan-700 text-white px-5 py-8 h-full" schema={ServiceSchema} onSubmit={handleSubmit}>
      <h1 className='mb-5'>Création d'un service</h1>
      <div className=''>
        <Form.DatePicker name="date" label="Date" />
        <Form.Select name="time" label="Durée" defaultValue={"1"}>
          <MenuItem value="1">15 min</MenuItem>
          <MenuItem value="2">30 min</MenuItem>
          <MenuItem value="3">45 min</MenuItem>
        </Form.Select>
        <Form.Select name="type" label="Type" defaultValue={"a"}>
          <MenuItem value="a">type a</MenuItem>
          <MenuItem value="b">type b</MenuItem>
          <MenuItem value="c">type c</MenuItem>
        </Form.Select>
        <Form.TextField name="description" label="Description" defaultValue={""} />
        <Form.TextField name="street" label="Rue" defaultValue={""} />
        <Form.TextField name="npa" label="NPA" defaultValue={""} />
        <Form.Select name="canton" label="Canton" defaultValue={"VD"}>
          <MenuItem value="VD">VD</MenuItem>
          <MenuItem value="NE">NE</MenuItem>
          <MenuItem value="ZH">ZH</MenuItem>
        </Form.Select>
        <Form.Select name="dogs" label="Dogs" defaultValue={"a"}>
          <MenuItem value="a">chien a</MenuItem>
          <MenuItem value="b">chien b</MenuItem>
          <MenuItem value="c">chien c</MenuItem>
        </Form.Select>
      </div>
      

      <button className="border border-white mt-5 w-full" type="submit">Ajouter</button>
    </Form>
  )
}

Service.getLayout = (page) => <div className="bg-cyan-800 p-10">{page}</div> 

export default Service
