
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
    

        if (!name || !ingredients || !price){
            alert("Need to complete all details listed");
            return;
        }

        const newCake = {
            newCakeName : newCakeName,
            newCakeIngredients: newCakeIngredients,
            newCakePrice: newCakePrice
        }

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
            </form>
        </section>
    )


    













}