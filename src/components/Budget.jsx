import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    const [editMode, toggleEditMode] = useState(false);

    const handleEdit = () => {
        toggleEditMode(true);
    };

    const handleSaveEdit = (value) => {
        dispatch({
            type: "EDIT_BUDGET",
            payload: value
        });
        toggleEditMode(false);
    };

    return (
        <div className="alert alert-secondary d-flex justify-content-between p-3 align-items-center">
            {editMode ?
                <EditBudget
                    budget={budget}
                    handleSaveEdit={handleSaveEdit}
                /> :
                <ViewBudget
                    handleEdit={handleEdit}
                    budget={budget}
                />
            }
        </div>
    );
};

export default Budget;