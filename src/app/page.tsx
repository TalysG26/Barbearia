import Menu from "@/components/ui/Menu";
import NameUser from "@/components/ui/NameUser";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (

<div>

    <div className="p-10 flex justify-between items-center border-b border-gray-300">
      <img src="/logo.png" alt="Logo" className="h-10" />
      <Menu />
    </div>

    <div>
      <NameUser/>
    </div>

    <div>
      <span className="p-10 text-3xl" > Sexta, 2 de Fevereiro </span> 
    </div>

    <div className="flex items-center p-10"> 
      <Input className="m-5" type="text" placeholder="Buscar"/>
      <Button className="m-5" aria-placeholder="Buscar"></Button>
    </div>
    

</div>
  );
}
