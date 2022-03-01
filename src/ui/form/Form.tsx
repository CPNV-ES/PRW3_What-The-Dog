import { PropsWithoutRef, ReactNode } from "react";
import { FormProvider, useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { FormTextField } from "./FormTextField";
import { FormTextArea } from "./FormTextArea";
import { FormSwitch } from "./FormSwitch";

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<
    PropsWithoutRef<JSX.IntrinsicElements["form"]>,
    "onSubmit" | "noValidate"
  > {
  defaultValues?: UseFormProps<z.infer<S>>["defaultValues"];
  schema?: S;
  onSubmit: (values: z.infer<S>) => Promise<void> | void;
  children: ReactNode;
}

export function Form<S extends z.ZodType<any, any>>({
  defaultValues,
  schema,
  children,
  onSubmit,
  ...props
}: FormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: "onBlur",
    defaultValues,
    resolver: schema ? zodResolver(schema) : undefined,
  });

  const { handleSubmit } = ctx;

  return (
    <FormProvider {...ctx}>
      <form
        noValidate
        onSubmit={handleSubmit(async (values) => {
          await onSubmit(values);
        })}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

Form.TextField = FormTextField;
Form.TextArea = FormTextArea;
Form.Switch = FormSwitch;
