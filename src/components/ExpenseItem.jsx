import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti"

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDelete = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id
        });
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="mr-3 badge badge-pill bg-primary">
                    {props.cost}
                </span>
                <TiDelete size="1.5em" onClick={handleDelete}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;