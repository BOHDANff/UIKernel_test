import React from 'react';
import ReactDOM from 'react-dom/client';
import UIKernel from "uikernel";
import 'uikernel/dist/themes/base/uikernel.css';

const model = new UIKernel.Models.Grid.Collection({
    data: [
        [1, {
            name: 'Pace',
            surname: 'White',
            age: 20
        }],
        [2, {
            name: 'Evangeline',
            surname: 'Terrell',
            age: 72
        }],
        [3, {
            name: 'Roach',
            surname: 'Potts',
            age: 14
        }]
    ]
});

const columns = {
    name: {
        name: 'First Name',
        render: ['name', record => record.name]
    },
    surname: {
        name: 'Last Name',
        render: ['surname', record => record.surname]
    },
    age: {
        name: 'Age',
        render: ['age', record => record.age]
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UIKernel.Grid cols={columns} model={model}/>
  </React.StrictMode>
);

