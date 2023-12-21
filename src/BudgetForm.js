import React,{useState} from "react";
import "./App.css";
const BudgetForm=({onAddExpense})=>{
    const[title,setTitle]=useState("");
    const[amount,setAmount]=useState("");
    const[category,setCategory]=useState("");

    const handleSubmit=(e)=>{
        e. preventDefault();
        if(title.trim()!=""&& amount>0){
            const newExpense ={
                id:new Date().getTime(),title,amount:+amount,
            };
            onAddExpense(newExpense);
            setTitle("");
            setAmount("");
        }
    };
    return(
        <form onSubmit={handleSubmit} className="container">
            <div>
                <h3>Title:</h3>
                <input type="text" value={title} placeholder="Enter the name here" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <h3>Amount:</h3>
                <input type="number" value={amount} placeholder="Enter the amount here" onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button className="btn" type="submit">Add</button>
        </form>
    )
}
export default BudgetForm;