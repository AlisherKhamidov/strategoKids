import React from 'react';
import kidStyle from './Kid.module.css';
import Kid from './types/Kid';

interface ParentProp {
 kid: Kid
}

function KidCard({ kid }: ParentProp): JSX.Element {
    return (
        <div className={kidStyle.kid__card}>
            <span className={kidStyle.kid__name}>{kid.name}</span>
            <span>{kid.secondName}</span>
            <span>{kid.middleName}</span>
            {/* <span>{kid.birthDate}</span>
            <div>{kid.phone}</div> */}
            <button className={kidStyle.kid__btn__first} type="button">Изменить</button>
            <button className={kidStyle.kid__btn__second} type="button">Удалить</button>

        </div>
    );
}

export default KidCard;
