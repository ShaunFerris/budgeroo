import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);
    return (
        <Row>
            <Col xs={10} className="pr-3">
                <input
                    className="form-control mr-3"
                    required="required"
                    type="number"
                    id="budgetAmount"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Col>
            <Col xs={2}>
                <Button
                    variant="primary"
                    onClick={() => {
                        return props.handleSaveEdit(value);
                    }}
                >Save</Button>
            </Col>

        </Row>
    );
};

export default EditBudget;