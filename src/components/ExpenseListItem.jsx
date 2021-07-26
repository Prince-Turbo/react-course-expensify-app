import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({description, id, createdAt, amount}) => (
    <div>
        <Link to={`/edit/${id}`} ><h4>{description}</h4></Link>
        <p>{amount} - {moment(createdAt).format("MMM Do, YYYY")}</p>
        
    </div>
);


export default ExpenseListItem;