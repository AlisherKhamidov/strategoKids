import Banner from '../banner/Banner';
import Stories from '../stories/Stories';
import Tournaments from '../tournaments/Tournaments';

export default function MainPage(): JSX.Element {
  return (
    <>
      <Banner />

      <Stories />
      <Tournaments />
    </>
  );
}
