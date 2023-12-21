import React from "react";
import "./App.css";
const BudgetList =({budget,onDeleteExpense})=>{
    return(
        <div className="expenses">
            <h2>Expenses</h2>
            <ul>
                {budget.map(expense=>(
                <li key={expense.id}>
                    {expense.title} - ${expense.amount}
                    <button  className="btn1" onClick={()=>onDeleteExpense(expense.id)}><i class="fa-solid fa-trash-can"></i></button>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default BudgetList;