import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "O nome deve ter no mínimo 3 caracteres",
    })
    .max(255, {
      message: "O nome deve ter no máximo 255 caracteres",
    }),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(10, {
      message: "O telefone deve ter no mínimo 10 caracteres",
    })
    .max(11, {
      message: "O telefone deve ter no máximo 11 caracteres",
    }),
  help: z.string().min(1, {
    message: "A mensagem deve ter no mínimo 1 caracter",
  }),
  billing: z.string().min(1, {
    message: "A mensagem deve ter no mínimo 1 caracter",
  }),
});
