import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "react-bootstrap";

const Budget = () => {
    return (
        <div className="alert alert-secondary d-flex justify-content-between p-3 align-items-center">
            <span>Budget ${budget}</span>
            <Button variant="primary">Edit</Button>
        </div>
    );
};

export default Budget;