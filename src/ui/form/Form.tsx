import { PropsWithoutRef, ReactNode } from "react";
import { FormProvider, useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { errorMap } from "./errorMap";
import { FormTextField } from "./FormTextField";
import { FormSwitch } from "./FormSwitch";
import { FormSelect } from "./FormSelect";
import { FormDatePicker } from "./FormDatePicker";

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
    resolver: schema ? zodResolver(schema, { errorMap }) : undefined,
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
Form.Select = FormSelect;
Form.DatePicker = FormDatePicker;
Form.Switch = FormSwitch;
