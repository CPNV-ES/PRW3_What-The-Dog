import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
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

const Service: NextPage = () => {

  function handleSubmit(data: z.infer<typeof ServiceSchema>) {
   console.log(data);
  }


  return (
    <Form schema={ServiceSchema} onSubmit={handleSubmit}>
      <label>Date</label>
      <Form.Input className="border border-black" name="date" type="date" placeholder="" valueAsDate />
      <label>Durée</label>
      <Form.Input className="border border-black" name="time" type="text" placeholder="" />
      <label>Type</label>
      <Form.Input className="border border-black" name="type" type="text" placeholder="" />
      <label>Description</label>
      <Form.Input className="border border-black" name="description" type="text" placeholder="" />
      <label>Rue</label>
      <Form.Input className="border border-black" name="street" type="text" placeholder="" />
      <label>NPA</label>
      <Form.Input className="border border-black" name="npa" type="text" placeholder="" />
      <label>VD</label>
      <Form.Input className="border border-black" name="canton" type="text" placeholder="" />
      <label>Dogs</label>
      <Form.Input className="border border-black" name="dogs" type="text" placeholder="" />
      
      <button className="border border-black" type="submit">Créer le service</button>
    </Form>
  )
}

export default Service
