"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios, { isAxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
// import { toast } from "sonner";
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

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      toast("Formulário enviado com sucesso", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }

      toast.error("Erro ao enviar formulário");
    }
  });

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <div>
          <Input
            id="name"
            {...register("name")}
            className="bg-transparent rounded-none border-0 border-solid border-b border-b-[#A2A2A2]"
            placeholder="Nome completo"
            error={errors.name?.message}
          />
        </div>
        <div>
          <Input
            id="email"
            {...register("email")}
            className="bg-transparent rounded-none border-0 border-solid border-b border-b-[#A2A2A2]"
            placeholder="Email"
            error={errors.email?.message}
          />
        </div>
        <div>
          <Input
            id="phone"
            className="bg-transparent rounded-none border-0 border-solid border-b border-b-[#A2A2A2]"
            placeholder="Whatsapp"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>
        <div>
          <fieldset>
            <legend className="text-base text-[#A2A2A2]">
              Preciso de ajuda com
            </legend>
            <div className="flex flex-wrap gap-4 mt-2">
              <input
                type="radio"
                id="opcao1"
                {...register("help")}
                defaultValue="Identidade visual"
              />
              <label htmlFor="opcao1" className="button">
                Identidade visual
              </label>
              <input
                type="radio"
                id="opcao2"
                {...register("help")}
                defaultValue="Websites & Landing Pages"
              />
              <label htmlFor="opcao2" className="button">
                Websites & Landing Pages
              </label>
              <input
                type="radio"
                id="opcao3"
                {...register("help")}
                defaultValue="Criativos/Lançamento"
              />
              <label htmlFor="opcao3" className="button">
                Criativos/Lançamento
              </label>
              <input
                type="radio"
                id="opcao4"
                {...register("help")}
                defaultValue="SaaS"
              />
              <label htmlFor="opcao4" className="button">
                SaaS
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend className="text-base text-[#A2A2A2]">
              Meu faturamento atual é
            </legend>
            <div className="flex flex-wrap gap-4 mt-2">
              <input
                type="radio"
                id="billingOption01"
                {...register("billing")}
                defaultValue="Até 5 mil"
              />
              <label htmlFor="billingOption01" className="button">
                Até 5 mil
              </label>
              <input
                type="radio"
                id="billingOption02"
                {...register("billing")}
                defaultValue="15-20mil"
              />
              <label htmlFor="billingOption02" className="button">
                15-20mil
              </label>
              <input
                type="radio"
                id="billingOption03"
                {...register("billing")}
                defaultValue="20-30mil"
              />
              <label htmlFor="billingOption03" className="button">
                20-30mil
              </label>
              <input
                type="radio"
                id="billingOption04"
                {...register("billing")}
                defaultValue="Acima de x mil"
              />
              <label htmlFor="billingOption04" className="button">
                Acima de x mil
              </label>
            </div>
          </fieldset>
        </div>

        <button
          className="w-full md:w-auto px-12 py-4 gradient-button flex items-center justify-center gap-3 rounded-full maskButtonAnim"
          type="submit"
        >
          <div className="mask-button-text">
            <p className="text-[#08060C] first-text">Solicitar contato</p>
            <p className="text-[#08060C] second-text">Solicitar contato</p>
          </div>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
