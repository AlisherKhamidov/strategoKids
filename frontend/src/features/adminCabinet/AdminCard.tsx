import { useAppDispatch } from '../../store';
import Data from '../applications/types/Data';
import adminStyle from './AdminCard.module.css';
import { changeStatus } from './adminSlice';

interface AdminProp {
  handleStatusChange: (adminData: { status: boolean, appId: number }) => void;
  application: Data
}

function AdminCard({ application, handleStatusChange }: AdminProp): JSX.Element {
    // function handleStatusChange(adminData: { status: boolean, appId: number }): void {
    //     setFresh('ads');
    //     dispatch(changeStatus(adminData));
    // }
    return (
        <div className={adminStyle.app__card}>
            <span>{application.kidName}</span>
            <span>{application.birthDate}</span>
            <span>{application.parentName}</span>
            <span>{application.phone}</span>
            <span>{application.experience}</span>
            <span>{application.isChecked}</span>
            <button
              className={adminStyle.app__btn}
              type="button"
              onClick={() => handleStatusChange(
                { status: !application.isChecked, appId: application.id }
              )}
            >Обработано
            </button>
        </div>
    );
}

export default AdminCard;
