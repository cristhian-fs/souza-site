import { contactSchema } from "@/components/forms/form-schema";
import axios, { isAxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
    console.log(err);
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
