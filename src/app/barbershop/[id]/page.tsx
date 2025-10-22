
interface BabershopPageProps {
    params: {
        id: string
    }
}


const BabershopPage = ({params}: BabershopPageProps) => {
    return (


     <div>
         <p>{params.id}</p>
         <div className="relative h-[180px] w-full">
            
         </div>
    </div>
    );
}
 
export default BabershopPage;