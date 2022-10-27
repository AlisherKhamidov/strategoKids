import { YMaps, Map, Placemark } from 'react-yandex-maps';
import footerStyle from './Footer.module.css';
import vkLogo from './images/vk.png';
import instaLogo from './images/instagram.png';

const mapData = {
  center: [59.975968, 30.323279],
  zoom: 11,
};

const placemarks = [
  [59.975968, 30.323279],
];

export default function Footer(): JSX.Element {
  return (
    <div className={footerStyle.footer}>
    <div className={footerStyle.container}>
      <div className={footerStyle.raw1}>
        <h2>Контакты</h2>
        <h3>Номер телефона<br /><br /> +7 (921) 944-11-92</h3>
        <h2>Социальные сети</h2>
        <div className={footerStyle.logo}>
          <a href="https://vk.com/stratego_kids"><img src={vkLogo} alt="" /></a>
          <a href="#"><img src={instaLogo} alt="" /></a>
        </div>
      </div>
      <div className={footerStyle.raw2}>
        <h2>Адрес</h2>
        <h3>Аптекарская набережная, 12, Санкт-Петербург</h3>
        <div className={footerStyle.map}>
        <YMaps>
           <Map defaultState={mapData}>
              {placemarks.map((coordinate) =>
              <Placemark classname={footerStyle.place} geometry={coordinate} />)}
           </Map>
        </YMaps>
        </div>
      </div>
    </div>
    </div>
  );
}
