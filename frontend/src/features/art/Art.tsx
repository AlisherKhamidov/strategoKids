import artImg from './images/image2.jpg';
import artStyle from './Art.module.css';

export default function Art(): JSX.Element {
  return (
    <>
      <div />
      <img src={artImg} alt="" className={artStyle.image} />
    </>

  );
}
