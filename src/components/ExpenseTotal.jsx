import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalSpent = expenses.reduce((total, expense) => {
        return (total + expense.cost);
    }, 0);

    return (
        <div className="alert alert-info">
            <span>Spent so far: ${totalSpent}</span>
        </div>
    );
};

export default ExpenseTotal;