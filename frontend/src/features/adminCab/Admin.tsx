import React from 'react';
import styleAdmin from './Admin.module.css';

function Admin(): JSX.Element {
    return (
        <div className={styleAdmin.admin__container}>
            <div className={styleAdmin.admin__header}>
                <p>Заявки на уроки</p>
            </div>

        </div>
    );
}

export default Admin;
