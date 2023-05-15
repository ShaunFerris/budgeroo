import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        {id: 100, name: "Shopping", cost: 100},
        {id: 100, name: "Shopping", cost: 100},
        {id: 100, name: "Shopping", cost: 100},
        {id: 100, name: "Shopping", cost: 100},
        {id: 100, name: "Shopping", cost: 100}
    ];

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;