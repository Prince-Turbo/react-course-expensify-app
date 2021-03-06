import React from "react";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { useHistory } from "react-router-dom";
import { history } from "../routers/AppRouter";

export const AddPage = (props) => {
  let history = useHistory();
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={(expense) => {
            props.onSubmit(expense);
            history.push("/dashboard");
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddPage);
