import storiesStyle from './Stories.module.css';
import kid1 from './images/kid1.jpeg';
import kid2 from './images/kid2.jpeg';
import kid3 from './images/kid3.jpeg';
import kid4 from './images/kid4.jpeg';

export default function Stories(): JSX.Element {
  return (
    <div className={storiesStyle.container}>

        <div className={storiesStyle.card} style={{ backgroundImage: `url(${kid1})`, backgroundSize: 'cover' }}>
          <h5>Стори</h5>
          <button className={storiesStyle.whiteBtn} type="button">Узнать</button>
        </div>

        <div className={storiesStyle.card} style={{ backgroundImage: `url(${kid2})`, backgroundSize: 'cover' }}>
          <h5>Стори</h5>
          <button className={storiesStyle.whiteBtn} type="button">Узнать</button>
        </div>

        <div className={storiesStyle.card} style={{ backgroundImage: `url(${kid3})`, backgroundSize: 'cover' }}>
          <h5>Стори</h5>
          <button className={storiesStyle.whiteBtn} type="button">Узнать</button>
        </div>

        <div className={storiesStyle.card} style={{ backgroundImage: `url(${kid4})`, backgroundSize: 'cover' }}>
          <h5>Стори</h5>
          <button className={storiesStyle.whiteBtn} type="button">Узнать</button>
        </div>

    </div>
  );
}
