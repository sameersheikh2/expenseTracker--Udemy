import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const editingHandler = () => {
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={editingHandler}>Add Expense</button>}
      {editing && (
        <ExpenseForm
          onCancle={cancelEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
