import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import KidCard from '../kids/KidCard';
import { addKid, loadKids } from '../kids/kidsSlice';
import KidData from '../kids/types/KidData';
import style from './ParentCabinet.module.css';

export default function ParentCabinet(): JSX.Element {
  const user = useSelector((globalState: RootState) => globalState.auth.user);
  const kidsList = useSelector((state: RootState) => state
  .kids.kidsArr);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadKids());
  }, [dispatch]);

  const { register, handleSubmit, formState: { errors }, } = useForm<KidData>();

  const submit = handleSubmit(async (kid: KidData) => {
    dispatch(addKid(kid));
  });
  return (
    <div>
      <div className={style.parent__header}>Мои дети:</div>
      <div className={style.children}>
      {
        kidsList?.filter((kid) => user?.id === kid.user_id).map((kid) => (
        // <p>{kid.name}</p>
        <KidCard
          key={kid.id}
          kid={kid}
        />
        ))
      }
      </div>
    <div className={style.form__container}>
      <form className={style.forma} onSubmit={submit}>
        <label className={style.label} htmlFor="input__kid">
          <span className={style.label__text}>Имя ребенка</span>
          <input className={errors.name ? style.input__error : style.input} id="input__kid" {...register('name')} required placeholder="Введите имя ребёнка" />
          {/* <Error error={errors.kidName?.message} /> */}
          {errors.name && <p style={{ color: 'red' }}>{errors.name?.message}</p>}
        </label>

        <label className={style.label} htmlFor="input__secondName">
          <span className={style.label__text}>Фамилия</span>
          <input className={style.input} id="input__secondName" {...register('secondName')} required placeholder="Введите фамилию ребенка" />
        </label>

        <label className={style.label} htmlFor="input__middleName">
          <span className={style.label__text}>Отчество</span>
          <input className={style.input} id="input__middleName" {...register('middleName')} required placeholder="Введите отчество ребенка" />
        </label>

        <label className={style.label} htmlFor="input__data">
          <span className={style.label__text}>Дата рождения ребёнка</span>
          <input className={style.input} type="date" id="input__data" {...register('birthDate')} required placeholder="00.00.0000" />
        </label>

        <label className={style.label} htmlFor="input__photo">
          {/* <span className={style.label__text}>Ссылка на фото</span> */}
          <input hidden className={style.input} id="input__photo" {...register('photo')} placeholder="ссылка на фото" />
        </label>

        <div className={style.btnPosition}>
          <button className={style.button} type="submit">
            Добавить ребенка
          </button>
        </div>
      </form>
    </div>

    </div>

  );
}
