

//eslint-disable-next-line
import logo from './images/logo.png' ;

// eslint-disable-next-line
import style  from './Banner.module.css';

export default function Banner(): JSX.Element {
  return (

    <div className={style.banner}>
      <div className={style.circle}>
        <img className={style.logo} src={logo} alt="" />
      </div>
      <div className={style.textBanner}>
        <h1>Stratego Kids</h1>
        <h4>Детская школа шахмат и логических игр в Санкт-Петербурге</h4>
      </div>

    </div>
  );
}
