
import {useState} from "react";


const CakeForm =({newCakeOnSubmission}) => {

    const [newCakeName, setNewCakeName] = useState("");
    const [newCakeIngredients, setNewCakeIngredients] = useState ("");
    const [newCakePrice, setNewCakePrice] = useState ("");

    const handleFormSubmit = (event) =>{
        event.preventDefault();


        if (!name || !ingredients || !price){
            alert("Need to complete all details listed");
        }
    }













}