import './App.css';
import { useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from '../features/main/MainPage';
import Application from '../features/applications/Application';
import Layout from '../features/layout/Layout';
import Events from '../features/events/Events';
import Groups from '../features/groups/Groups';
import Schedule from '../features/schedule/Schedule';
import Art from '../features/art/Art';
// import { selectLogin } from '../features/auth/selectors';

function App():JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/application" element={<Application />} />
          <Route path="/events" element={<Events />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/art" element={<Art />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
