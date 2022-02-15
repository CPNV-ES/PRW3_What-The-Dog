# Example form

```tsx
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const LoginForm = () => {
  function handleSubmit(data: z.infer<typeof LoginSchema>) {
    console.log(data);
  }

  return (
    <Form schema={LoginSchema} onSubmit={handleSubmit}>
      <Label>email</Label>
      <Form.Input name="email" type="email" placeholder="email" />
      <Form.Input name="password" type="password" placeholder="········" />
      <button type="submit">login</button>
    </Form>
  );
};
```
