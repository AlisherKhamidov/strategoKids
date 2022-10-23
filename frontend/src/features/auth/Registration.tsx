import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'semantic-ui-react';
import { useAppDispatch } from '../../store';
import { register, resetRegisterFormError } from './authSlice';
import style from '../applications/Application.module.css';
import { selectRegisterFormError } from './selectors';

function Registration(): JSX.Element {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const error = useSelector(selectRegisterFormError);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordRepeat, setPasswordRepeat] = React.useState('');

    const handleSubmit = React.useCallback(
        async (event: React.FormEvent) => {
          event.preventDefault();

          const dispatchResult = await dispatch(
            register({
              name,
              email,
              phone,
              password,
              passwordRepeat,
            })
          );

          if (register.fulfilled.match(dispatchResult)) {
            navigate('/main');
          }
        },
        [dispatch, navigate, name, email, phone, password, passwordRepeat]
      );

      const handleNameChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );
      const handleEmailChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );
      const handlePhoneChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );
      const handlePasswordChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );
      const handlePasswordRepeatChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPasswordRepeat(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );

  return (
    <div className={style.formochka}>
    {error && (
        <div className="" style={{ display: 'block' }}>
          {error}
        </div>
      )}
    <Form onSubmit={handleSubmit}>
    <Form.Group widths="equal">
      <Form.Field
        id="form-input-control-first-name"
        control={Input}
        label="Ваше имя"
        placeholder="Введите ваше имя"
      >
        <input value={name} onChange={handleNameChange} required />
      </Form.Field>
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Email"
        placeholder="Введите ваш Email"
      >
          <input value={email} type="email" onChange={handleEmailChange} required />
      </Form.Field>
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Телефон"
        placeholder="+7-000-000-00-00"
      >
         <input value={phone} onChange={handlePhoneChange} required />
      </Form.Field>
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Пароль"
        placeholder="Придумайте пароль"
        type="password"
      >
          <input value={password} onChange={handlePasswordChange} required />
      </Form.Field>
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Подтвердите пароль"
        placeholder="Пароль"
        type="password"
      >
          <input value={passwordRepeat} onChange={handlePasswordRepeatChange} required />
          {/* <a href="#" className="" onClick=""></a> */}
      </Form.Field>
    </Form.Group>
    <Form.Field
      id="form-input-control-last-name"
      control={Button}
      content="Зарегистрироваться"
      className={style.my_button}
      type="submit"
    />
    </Form>
    </div>
  );
}

export default Registration;
