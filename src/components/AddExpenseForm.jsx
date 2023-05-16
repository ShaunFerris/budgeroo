import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        required="required"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input
                        className="form-control"
                        required="required"
                        type="text"
                        id="cost"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm mt-auto">
                    <Button type="submit" variant="primary" className="mt-3">Save</Button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;