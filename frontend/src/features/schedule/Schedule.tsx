import scheduleImg from './images/image.jpg';
import scheduleStyle from './Schedule.module.css';

export default function Schedule(): JSX.Element {
  return (
    <>
      <div />
      <img src={scheduleImg} alt="" className={scheduleStyle.image} />
    </>

  );
}
