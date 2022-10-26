import footerStyle from "./Footer.module.css";
import vkLogo from "./images/vk.png";
import instaLogo from "./images/instagram.png";
import { useNavigate } from "react-router-dom";

export default function Footer(): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className={footerStyle.container}>
      <div className={footerStyle.raw1}>
        <h1>Контакты:</h1>
        <h2>Номер телефона: +7 (921) 944-11-92</h2>
        <h1>Социальные сети:</h1>
        <div className={footerStyle.logo}>
          <a href={'https://vk.com/stratego_kids'}><img src={vkLogo} alt="" /></a>
          <a href={'#'}><img src={instaLogo} alt="" /></a>
        </div>
      </div>
      <div className={footerStyle.raw2}>
        <h1>Адрес:</h1>
        <h2>Аптекарская набережная, 12, Санкт-Петербург</h2>
      </div>
    </div>
  );
}
