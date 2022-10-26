import footerStyle from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <div className={footerStyle.container}>
     <div className={footerStyle.raw1}>
        <h1>Контакты:</h1>
        <h2>
        Номер телефона:
        +7 (921) 944-11-92
        </h2>
     </div>
     <div className={footerStyle.raw2}>
        <h1>Адрес:</h1>
        <h2>Аптекарская набережная,
            12, Санкт-Петербург
        </h2>
     </div>
    </div>

  );
}
