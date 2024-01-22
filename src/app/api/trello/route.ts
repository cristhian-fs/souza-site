import axios, { isAxiosError } from "axios";
import { NextResponse } from "next/server";
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

export type ContactFields = z.infer<typeof contactSchema>;

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, email, phone, help, billing } = contactSchema.parse(body);

    const response = await axios.post(
      `https://api.trello.com/1/cards?idList=${process.env.LIST_ID}&key=${process.env.API_KEY}&token=${process.env.TOKEN}`,
      {},
      {
        params: {
          name,
          desc: `## **Nome**: ${name}\n**Email**: ${email}\n**Telefone**: https://wa.me/55${phone}\n**Faturamento**: ${billing}\n**Ajuda**: ${help}`,
        },
      }
    );

    return NextResponse.json({
      data: response.data,
    });
  } catch (err) {
    if (isAxiosError(err)) {
      console.log(err.response?.data);
    }
    return NextResponse.json(
      {
        data: err,
      },
      {
        status: 500,
      }
    );
  }
}
