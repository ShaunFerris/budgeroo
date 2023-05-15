import React from "react";
import { Button } from "react-bootstrap";

const AddExpenseForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input
                        className="form-control"
                        required="required"
                        type="text"
                        id="name"
                    ></input>
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input
                        className="form-control"
                        required="required"
                        type="text"
                        id="cost"
                    ></input>
                </div>
                <div className="col-sm mt-auto">
                    <Button variant="primary">Save</Button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;