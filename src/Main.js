import React,{useState} from 'react';
import BudgetForm from "./BudgetForm";
import BudgetList from "./BudgetList";

const Main=()=>{
    const[budget,setBudget]=useState(
        JSON.parse(localStorage.getItem('budget'))||[]);
    const addExpense = (expense)=>{
        setBudget([...budget,expense]);
    };
    const deleteExpense=(id)=>{
        const updatedExpenses=budget.filter((expense)=>expense.id !==id);
        setBudget(updatedExpenses);
    };
    React.useEffect(()=>{
        localStorage.setItem('budget',JSON.stringify(budget));
    })
    return(
        < div className='main'>
            <h1>Budget Tracker</h1>
            <BudgetForm onAddExpense={addExpense}/>
            <BudgetList budget={budget} onDeleteExpense={deleteExpense}/>
        </div>
    )
}
export default Main;