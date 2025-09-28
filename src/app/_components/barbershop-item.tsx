import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Barbershop } from "@/generated/prisma";
import { StarIcon } from "lucide-react";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-2">
        <div className="relative h-[100px] w-full">
          <img
            src={barbershop.imageUrl}
            alt="Barbearia"
            className="w-full h-full object-cover rounded-md"
          />
          <Badge className="absolute top-2 left-2 flex flex-row items-center gap-1">
            <StarIcon size={12} className="fill-primary" />
            <span className="text-xs font-semibold">5.0</span>
          </Badge>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="truncate text-xl font-bold">{barbershop.name}</p>
          <p className="truncate font-semibold">{barbershop.address}</p>
          <Button variant={"outline"}>Reservar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
