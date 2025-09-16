  import Menu from "@/components/ui/Menu";
  import NameUser from "@/components/ui/NameUser";
  import {Input} from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { FaMagnifyingGlass } from "react-icons/fa6";
  import Cabelo from "@/components/ui/Cabelo";
  import Barba from "@/components/ui/Barba";
  import Acabamento from "@/components/ui/Acabamento";
  import AgendamentoDate from "@/components/ui/AgendamentoDate";

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

      <div className="flex items-center p-5 gap-10"> 
        <Input className="m-5" type="text" placeholder="Buscar"/>
        <Button className="" aria-placeholder="Buscar"> <FaMagnifyingGlass />  </Button>
      </div>

    <div className="flex p-5 gap-1 justify-evenly">
        <div className="p-5">
            <Cabelo />
        </div>  
          <div className="p-5">
              <Barba />
          </div> 
          <div className="p-5">
              <Acabamento />
        </div>
     </div>
      
      <div className="flex justify-center object-fill  ">
        <img src="banner-01.png" alt="banner" className="w-170 h-70 " />
      </div>

      <p className="block font-bold p-5 text-gray-500 mt-10">AGENDAMENTOS</p>

      <div className=" border border-gray-300 w-100vw   rounded-lg m-5"> 
      
        <div className="flex justify-end p-5 ">
        <AgendamentoDate  />  
        </div>

      </div>
</div>
    );
  }
