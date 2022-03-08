import { z, ZodErrorMap } from "zod";

export const errorMap: ZodErrorMap = (err: z.ZodIssueOptionalMessage, ctx) => {
  if (err.code === z.ZodIssueCode.invalid_type) {
    return { message: "Ce champ est requis" };
  }

  if (err.code === z.ZodIssueCode.invalid_string) {
    if (err.validation === "email") {
      return { message: "l'email n'est pas valide" };
    }
  }

  if (err.code === z.ZodIssueCode.too_big) {
    if (err.inclusive) {
      return {
        message: `La valeur doit être inférieure ou égale à ${err.maximum}`,
      };
    }
  }

  if (err.code === z.ZodIssueCode.too_small) {
    if (err.inclusive) {
      return {
        message: `La valeur doit être supérieure ou égale à ${err.minimum}`,
      };
    }
  }

  return { message: ctx.defaultError };
};
