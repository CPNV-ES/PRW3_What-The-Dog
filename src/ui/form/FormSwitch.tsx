import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Controller, useFormContext } from "react-hook-form";

type FormSwitchProps = {
  name: string;
  defaultChecked?: boolean;
};

export const FormSwitch = ({
  name,
  defaultChecked = false,
}: FormSwitchProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultChecked}
      render={({ field }) => {
        return (
          <SwitchPrimitive.Root
            {...field}
            defaultChecked={field.value}
            onCheckedChange={field.onChange}
            className="relative w-8 h-5 bg-gray-300 rounded-full switch-primary"
          >
            <SwitchPrimitive.Thumb className="block w-4 h-4 bg-white rounded-full shadow-md switch-thumb" />
          </SwitchPrimitive.Root>
        );
      }}
    ></Controller>
  );
};
