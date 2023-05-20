import { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        return setFilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (event) => {
        const searchResult = expenses.filter((expense) => {
            return expense.name.toLowerCase().includes(event.target.value);
        });
        setFilteredExpenses(searchResult);
    };

    return (
        <>
            <input
                className="form-control mb-2 mr-sm-2"
                type="text"
                onChange={handleChange}
                placeholder={"Type to search..."}
            />
            <ul className="list-group">
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </ul>
        </>
    );
};

export default ExpenseList;