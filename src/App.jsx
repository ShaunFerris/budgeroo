import React from 'react';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';

const App = () => {
    return (
        <div className='container'>
            <h1 className='mt-3'>Budgeroo Budget Tracker</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <Remaining />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
            </div>
            <h1 className='mt-3'>Expenses</h1>
        </div>
    );
}

export default App;