import { useState } from "react";
import { Button } from "react-bootstrap";

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);
    return (
        <>
            <input
                className="form-control mr-3"
                required="required"
                type="number"
                id="budgetAmount"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <Button
                variant="primary"
                onClick={() => {
                    return props.handleSaveEdit(value)
                }}
            >Save</Button>
        </>
    );
};

export default EditBudget;