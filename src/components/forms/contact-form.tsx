"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios, { isAxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { contactSchema } from "./form-schema";

export type ContactFields = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFields>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post("/api/trello", data);

      toast.success("Mensagem enviada com sucesso!");
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }

      toast.error("Erro ao enviar mensagem!");
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="name">Nome:</Label>
        <Input id="name" {...register("name")} error={errors.name?.message} />
      </div>
      <div>
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>
      <div>
        <Label htmlFor="phone">WhatsApp:</Label>
        <Input
          id="phone"
          {...register("phone")}
          error={errors.phone?.message}
        />
      </div>
      <div>
        <Label htmlFor="billing">Faturamento:</Label>
        <Controller
          control={control}
          name="billing"
          render={({ field: { onChange } }) => (
            <Select onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um item" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2k">Até 2k</SelectItem>
                <SelectItem value="2-5k">2k à 5k</SelectItem>
                <SelectItem value="5-10k">5k à 10k</SelectItem>
                <SelectItem value="10k+">10k+</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div>
        <Label htmlFor="help">Ajuda:</Label>
        <Controller
          control={control}
          name="help"
          render={({ field: { onChange } }) => (
            <Select onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um item" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Landing Page">Landing Page</SelectItem>
                <SelectItem value="ID Visual">ID Visual</SelectItem>
                <SelectItem value="Lançamento">Lançamento</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default ContactForm;
