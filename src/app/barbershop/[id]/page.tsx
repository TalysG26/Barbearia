
interface BabershopPageProps {
    params: {
        id: string
    }
}


const BabershopPage = ({params}: BabershopPageProps) => {
    return (
     <div>
         <p>{params.id}</p>
    </div>
    );
}
 
export default BabershopPage;