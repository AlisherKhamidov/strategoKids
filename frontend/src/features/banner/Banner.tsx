// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import logo from './images/logoCentered.png';

// eslint-disable-next-line
import style from './Banner.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Banner(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user)
  const navigate = useNavigate();
  return (
    <div className={style.banner}>
      <div className={style.circle}>
        <img className={style.logo} src={logo} alt="" />
      </div>
      <div className={style.textBanner}>
        <h1 className={style.title}>Stratego Kids</h1>
        <h4 className={style.losung}>Детская школа шахмат и логических игр в Санкт-Петербурге</h4>
        {!user && <div className={style.buttonRow}>
          <button type="button" className={style.whiteBtn} onClick={() => navigate('/application')}>
            Записать ребенка
          </button>
        </div>}
      </div>
    </div>
  );
}
