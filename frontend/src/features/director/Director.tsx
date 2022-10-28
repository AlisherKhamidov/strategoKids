import React from "react";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import directorStyle from "./Director.module.css";
import style from "../banner/Banner.module.css";
import logo from "../banner/images/logoCentered.png";

function Director() {
  return (
    <>
      <Banner />
      <img
        className={directorStyle.img}
        src="https://taplink.st/a/b/d/e/6/1a4d97.jpg?142"
        alt="director photo"
      />
      <div className={directorStyle.container}>
        <div className={directorStyle.content}>
          ♨️ Здравствуйте! Меня зовут Мария Бутук. Я женский международный
          мастер по шахматам и вот уже 10 лет как тренер. Владею тремя
          иностранными языками и успешно преподаю на них искусство шахматной
          игры и логические настольные игры. В 2017 году я основала школу шахмат
          и логических игр Stratego. <br />
          <br />
          ♟️ Думать о том, что ребенок уже слишком взрослый для шахмат —
          неверно. Проверено на собственном опыте 💯.Так, о шахматах я узнала в
          8 лет. И через три года заняла третье место на детском чемпионате
          Европы в Турции
          <br />
          <br />
          🌼 В шахматах я оказалась по своей инициативе: услышала, что кто-то из
          знакомых детей получил медаль. И мне тоже такую захотелось. В семье
          никто не играл до этого. На первом же занятии тренер заметил
          способности и уговорил родителей, чтобы я продолжала занятия.
        </div>
        <div className={directorStyle.content}>
          🏆 Скромно о достижениях: <br />
          <br />
          👉 Чемпионка Санкт- Петербурга среди женщин,
          <br />
          👉 Призер Олимпиады по интеллектуальным видам спорта в Токио,
          <br />
          👉 Трехкратная чемпионка России в детских возрастных категориях.
          <br />
          <br />
          👻 Из неожиданных фактов биографии: <br />
          👉 Соревнуюсь с друзьями в количестве посещённых стран (сейчас их 34),
          <br />
          👉 Мечтаю стать Почетным донором России,
          <br /> 👉 Была на приеме у Папы Римского в Ватикане,
          <br /> 👉 Не представляю свою жизнь без настольных игр и собираю
          коллекцию (она уже настолько большая, что игры дома можно найти в
          самых неожиданных местах) ✌️ <br />
          <br />
          🔅 Мне очень повезло с тренерами на всем шахматном пути. И когда сама
          стала преподавать, то уже знала, как нужно строить уроки максимально
          комфортно и одновременно продуктивно. 🙋‍♀️ Глядя на довольных детей на
          занятиях, надеюсь, что мне это удается 😊
        </div>
      </div>
    </>
  );
}

export default Director;
