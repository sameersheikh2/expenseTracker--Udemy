import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenseData = props.data.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  let expenseFilter = <p>No expense found.</p>;

  if (filteredExpenseData.length > 0) {
    expenseFilter = filteredExpenseData.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {expenseFilter}
    </div>
  );
};

export default Expense;
