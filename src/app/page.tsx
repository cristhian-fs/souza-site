import ContactForm from "@/components/forms/contact-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <ContactForm />
    </main>
  );
}
