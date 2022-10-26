import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loadKids } from '../kids/kidsSlice';
import parentStyle from './ParentCabinet.module.css';

export default function ParentCabinet(): JSX.Element {
  const user = useSelector((globalState: RootState) => globalState.auth.user);
  const kidsList = useSelector((state: RootState) => state
  .kids.kidsArr);
  // console.log(user);
  // console.log(kidsList);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadKids());
  }, [dispatch]);

  return (
    <div>
      <div>Мои дети:</div>
      {
        kidsList?.filter((kid) => user?.id === kid.user_id).map((kid) =>
        <p>{kid.name}</p>

        )
      }
    </div>
  );
}

// .filter((kid) => user?.id === kid.id).
