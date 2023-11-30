import Cake from "./Cake";

const CakeList = ({listOfCakes}) => {
  const cakeLoop = listOfCakes.map(cake =>{
   return<Cake cake = {cake} key={cake.id} />
})
return(cakeLoop)  
}
export default CakeList;

