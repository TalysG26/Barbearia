import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

import Header from  '@/app/_components/Hearder'
import { Input } from "@/components/ui/input";
import Image from "next/image";
import BookingItem from "./_components/booking-item";

import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany();

  const barbershopsInv = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      
      
      <Header />

      
      
      <div className="p-5">
        <p className="text-xl font-bold">Olá, David!</p>
        <p className="text-sm">Quarta-feira, 24 de setembro de 2025</p>
      </div>

      
      <div className="flex flex-row items-center gap-2 px-5">
        <Input placeholder="Buscar serviços" />
        <Button size={"icon"}>
          <SearchIcon />
        </Button>
      </div>

   
      <div className="relative mt-6 h-[150px] w-full p-5">
        <Image
          src="/banner-01.png"
          alt="Banner"
          fill
          className="rounded-xl object-contain"
        />
      </div>


      <h3 className="p-5 text-sm font-semibold text-gray-400 uppercase">
        Agendamentos
      </h3>
      <BookingItem />


      <h3 className="p-5 text-sm font-semibold text-gray-400 uppercase">
        Recomendados
      </h3>
      <div className="flex flex-row gap-2 overflow-auto px-5 [&::-webkit-scrollbar]:hidden">
        {barbershops.map((item) => (
          <BarbershopItem key={item.id} barbershop={item} />
        ))}
      </div>

 
 
      <h3 className="p-5 text-sm font-semibold text-gray-400 uppercase">
        Populares
      </h3>
      <div className="flex flex-row gap-2 overflow-auto px-5 [&::-webkit-scrollbar]:hidden">
        {barbershopsInv.map((item) => (
          <BarbershopItem key={item.id} barbershop={item} />
        ))}
      </div>
    </div>
  );
}