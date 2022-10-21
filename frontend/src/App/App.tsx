import './App.css';
import { useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from '../features/main/MainPage';
import Application from '../features/applications/Application';
import Layout from '../features/layout/Layout';
import Groups from '../features/groups/Groups'
// import { selectLogin } from '../features/auth/selectors';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/application" element={<Application />} />
          <Route path="/groups" element={<Groups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
