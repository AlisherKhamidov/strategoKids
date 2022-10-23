import arrowStyle from './Arrow.module.css';

export default function Arrow(): JSX.Element {
  return (
    <div className={arrowStyle.container}>
      <div className={arrowStyle.arrow} />
    </div>

  );
}
