import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'semantic-ui-react';
import { useAppDispatch } from '../../store';
import { selectLoginFormError } from './selectors';
import style from '../applications/Application.module.css';
import { login, resetLoginFormError } from './authSlice';

function Login(): JSX.Element {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const error = useSelector(selectLoginFormError);
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = React.useCallback(
        async (event: React.FormEvent) => {
            event.preventDefault();
            const dispatchResult = await dispatch(
                login({
                    phone,
                    password,
                })
            );
            if (login.fulfilled.match(dispatchResult)) {
                navigate('/main');
            }
        },
        [dispatch, navigate, phone, password]);

        const handlePhoneChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(event.target.value);
          dispatch(resetLoginFormError());
        },
        [dispatch]
      );
      const handlePasswordChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
          dispatch(resetLoginFormError());
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
            placeholder="Введите пароль"
            type="password"
          >
              <input value={password} onChange={handlePasswordChange} required />
          </Form.Field>
        </Form.Group>
        <Form.Field
          id="form-input-control-last-name"
          control={Button}
          content="Войти"
          className={style.my_button}
          type="submit"
        />
        </Form>
        </div>
    );
}

export default Login;
