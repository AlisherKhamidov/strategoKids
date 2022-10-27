import footerStyle from "./Footer.module.css";
import vkLogo from "./images/vk.png";
import instaLogo from "./images/instagram.png";
import { useNavigate } from "react-router-dom";

export default function Footer(): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className={footerStyle.footer}>
    <div className={footerStyle.container}>
      <div className={footerStyle.raw1}>
        <h3>Контакты</h3>
        <h4>Номер телефона<br/><br/> +7 (921) 944-11-92</h4>
        <h3>Социальные сети</h3>
        <div className={footerStyle.logo}>
          <a href={'https://vk.com/stratego_kids'}><img src={vkLogo} alt="" /></a>
          <a href={'#'}><img src={instaLogo} alt="" /></a>
        </div>
      </div>
      <div className={footerStyle.raw2}>
        <h3>Адрес</h3>
        <h4>Аптекарская набережная, 12, Санкт-Петербург</h4>
      </div>
    </div>
    </div>
  );
}
