import React from 'react';
import { useForm } from 'react-hook-form';
import 'semantic-ui-css/semantic.min.css';
import { Form, Input, Button } from 'semantic-ui-react';
import style from './Application.module.css';
import sendApplication from './telegramApi';
import createApplication from './types/api';
import Data from './types/Data';

export default function Application(): JSX.Element {
  const { register, handleSubmit } = useForm<Data>();

  function onSubmit(data: Data): void {
    createApplication(data);
    sendApplication(data);
    }
  return (
    <div className={style.formochka}>
    <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group widths="equal">
      <Form.Field
        id="form-input-control-first-name"
        control={Input}
        label="Имя ребёнка"
        placeholder="Введите имя ребёнка"
      >
        <input {...register('kidName')} required />
      </Form.Field>
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Дата рождения ребёнка"
        placeholder="00.00.0000"
      >
          <input {...register('birthDate')} required />
      </Form.Field>
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Имя родителя"
        placeholder="Введите ваше имя"
      >
          <input {...register('parentName')} required />
      </Form.Field>
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Телефон"
        placeholder="+7-000-000-00-00"
      >
          <input {...register('phone')} required />
      </Form.Field>
    </Form.Group>
    <Form.Field
      id="form-input-control-last-name"
      control={Input}
      label="Опыт"
      placeholder="Опишите опыт вашего ребёнка в шахматах"
    >
        <input {...register('experience')} />
    </Form.Field>
    <Form.Field
      id="form-input-control-last-name"
      control={Button}
      content="Отправить заявку"
      className={style.my_button}
      type="submit"
    />
    </Form>
    </div>
  );
}
