import { Button } from "react-bootstrap";

const ViewBudget = (props) => {
    return (
        <>
            <span>Budget ${props.budget}</span>
            <Button variant="primary" onClick={props.handleEdit}>Edit</Button>
        </>
    );
};

export default ViewBudget;