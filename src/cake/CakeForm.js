
import {useState} from "react";


const CakeForm =({newCakeOnSubmission}) => {

    const [newCakeName, setNewCakeName] = useState("");
    const [newCakeIngredients, setNewCakeIngredients] = useState ("");
    const [newCakePrice, setNewCakePrice] = useState ("");

    const updateCakeName = (event) => {
        setNewCakeName(event.target.value)
    };
    
    const updateCakeIngredients = (event) => {
        setNewCakeIngredients(event.target.value)

    };
    
    const updateCakePrice = (event) => {
        setNewCakePrice(event.target.value)
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
    

        if (!newCakeName || !newCakeIngredients || !newCakePrice){
            alert("Need to complete all details listed");
            return;
        }

        const newCake = {
            cakeName : newCakeName,
            ingredients:newCakeIngredients.split(","),
            price: newCakePrice
            //spilts the newCakeIngredients string whenever it finds a comma
        }
        //cakeName is the Object's parameter name

        setNewCakeName("");
        setNewCakeIngredients("");
        setNewCakePrice("");
        newCakeOnSubmission(newCake);

    }

    return (
        <section>
            <h2>Add a New Cake!</h2>
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor="cakeName-input">Cake Name: </label>
                <input
                    type = "text"
                    id = "cakeName-input"
                    onInput={(event) => updateCakeName(event)}
                    value = {newCakeName}
                />

                <label htmlFor="cakeIngredients-input">Ingredients: </label>
                <input
                    type = "text"
                    id = "cakeIngredients-input"
                    onInput={(event) => updateCakeIngredients(event)}
                    value = {newCakeIngredients}
                />

                 <label htmlFor="cakePrice-input">Price: £ </label>
                <input
                    type = "text"
                    id = "cakePrice-input"
                    onInput={(event) => updateCakePrice(event)}
                    value = {newCakePrice}
                />  
                <input type ="submit" value="Add New Cake"/>
            </form>
        </section>
    )

}
 export default CakeForm;