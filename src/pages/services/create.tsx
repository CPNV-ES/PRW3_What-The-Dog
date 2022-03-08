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
  }


  return (
    <Form className="h-full px-5 py-8 text-white bg-cyan-700" schema={ServiceSchema} onSubmit={handleSubmit}>
      <h1 className="mb-5">{"Création d'un service"}</h1>
      <div className="grid grid-cols-12 space-y-3">
        <Form.DatePicker name="date" label="Date" className="col-span-12" />
        <Form.Select name="time" label="Durée" defaultValue={"1"} className="col-span-6 mr-3">
          <MenuItem value="1">15 min</MenuItem>
          <MenuItem value="2">30 min</MenuItem>
          <MenuItem value="3">45 min</MenuItem>
        </Form.Select>
        <Form.Select name="type" label="Type" defaultValue={""} className="col-span-6">
          <MenuItem value="i">item</MenuItem>
        </Form.Select>
        <Form.TextField name="description" label="Description" defaultValue={""} className="col-span-12" />
        <Form.TextField name="street" label="Rue" defaultValue={""} className="col-span-12" />
        <Form.TextField name="npa" label="NPA" defaultValue={""} className="col-span-8 mr-3" />
        <Form.Select name="canton" label="Canton" defaultValue={"VD"} className="col-span-4">
          <MenuItem value="VD">VD</MenuItem>
          <MenuItem value="NE">NE</MenuItem>
          <MenuItem value="ZH">ZH</MenuItem>
        </Form.Select>
        <Form.Select name="dogs" label="Dogs" defaultValue={""} className="col-span-12">
          <MenuItem value="i">item</MenuItem>
        </Form.Select>
      </div>


      <button className="border border-white mt-5 w-full" type="submit">Ajouter</button>
    </Form>
  )
}

Service.getLayout = (page) => <div className="bg-cyan-800 p-10">{page}</div>

export default Service
