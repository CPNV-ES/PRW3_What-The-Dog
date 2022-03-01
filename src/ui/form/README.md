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
      <Form.TextField name="email" type="email" label="email" />
      <Form.TextField name="password" type="password" label="········" />
      <button type="submit">login</button>
    </Form>
  );
};
```
