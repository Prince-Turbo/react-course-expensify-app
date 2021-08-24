import { v4 as uuidv4 } from 'uuid';
import { database } from '../firebase/firebase';

//ADDEXPENSE
export const addExpense = (expenses) => ({
    type: 'ADD_EXPENSE',
    expenses
});

export const startAddExpense = (expensesData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expensesData;
        const expenses = {description, note, amount, createdAt};
        database.ref('expenses').push(expenses).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expenses
            }));
        });        
    };
};

//REMOVEEXPENSE
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return(dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}));
        });
    };
};

//EDITEXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref('expenses').update({
            [id]: {
                ...updates
            }
        }).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

//SETEXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        }); 
    };
};