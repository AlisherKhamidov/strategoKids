/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import styleAdmin from './Admin.module.css';
import AdminCard from './AdminCard';
import { changeStatus, loadedApplications } from './adminSlice';

function Admin(): JSX.Element {
    const ApplicationsList = useSelector((state: RootState) => state.applications.applicationsArr);
    const dispatch = useAppDispatch();
    // console.log(ApplicationsList);

    useEffect(() => {
        dispatch(loadedApplications());
      }, [dispatch]);

function handleStatusChange(adminData: { status: boolean, appId: number }): void {
        // console.log(12345678);
        // console.log(adminData);
dispatch(changeStatus(adminData));
    }
    // const falseList = ApplicationsList.filter((el) => el.isChecked === false)

    return (
        <div className={styleAdmin.admin__container}>
            <div className={styleAdmin.admin__header}>
                <p>Заявки на уроки</p>
            </div>
            <div className={styleAdmin.app__map}>
                {ApplicationsList.filter((el) => !el.isChecked).map((application) => (
                    <AdminCard
                      key={application.id}
                      application={application}
                      handleStatusChange={handleStatusChange}
                    />
                ))}
            </div>
            <div className={styleAdmin.admin__header_two}>
                <p>Обработанные заявки</p>
            </div>

            <div className={styleAdmin.app__map}>
            {ApplicationsList.filter((el) => el.isChecked).map((application) => (
                    <AdminCard
                      handleStatusChange={handleStatusChange}
                      key={application.id}
                      application={application}
                    />
                ))}
            </div>
        </div>
    );
}

export default Admin;
