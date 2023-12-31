import { useState } from "react";
import CakeForm from "../cake/CakeForm"
import CakeList from "../cake/CakeList"


const CakeContainer = () => {

	
    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5,
				   id: 1
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3,
				  id: 2,
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5,
				   id: 3,
			} 
		]		
	)
   

    const handleNewCake = (newCake) =>{
		const updatedCakes = [...listOfCakes];
		updatedCakes.push(newCake);
		setListOfCakes(updatedCakes);
	}
	return(
		<>
		<h1>Cake Directory</h1>
		
		<CakeForm newCakeOnSubmission = {handleNewCake}/>
		<hr />
		<CakeList listOfCakes= {listOfCakes} />
		</>

	)
}

export default CakeContainer;