import './App.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import MainPage from '../features/main/MainPage';
import Application from '../features/applications/Application';
import Layout from '../features/layout/Layout';
import Events from '../features/events/Events';
import Groups from '../features/groups/Groups';
import { useAppDispatch } from '../store';
import { selectAuthChecked } from '../features/auth/selectors';
import { getUser } from '../features/auth/authSlice';
import Login from '../features/auth/Login';
import Registration from '../features/auth/Registration';
import Schedule from '../features/schedule/Schedule';
import Art from '../features/art/Art';
import Admin from '../features/adminCab/Admin';
import ParentCabinet from '../features/parentCabinet/ParentCabinet';
// import { selectLogin } from '../features/auth/selectors';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authChecked = useSelector(selectAuthChecked);

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (!authChecked) {
    return (
      <div className="" role="status">
        <span className="">Loading...</span>
      </div>
    );
  }
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/application" element={<Application />} />
          <Route path="/events" element={<Events />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/art" element={<Art />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/parents" element={<ParentCabinet />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
