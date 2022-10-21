/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';

export default function Events(): JSX.Element {
    const [state, setState] = useState({});

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const { title, description, photo } = event.target;
    //     setState({ title: title.value, description: description.value, photo: photo.value });
    // }
    // // console.log(state);
    // useEffect(() => {
    //     fetch('api/events');
    // }, [state])
    // useEffect(() => {
    //         async () => {
    //             const res = await fetch('/api/events', {
    //                 method: 'POST',
    //                 body: JSON.stringify(state),
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             });

    //             if (res.status >= 400) {
    //                 const { error } = await res.json();
    //                 throw error;
    //             }

    //             return res.json();
    //         };
    //     }
    // , [state]);
    useEffect(() => {
        async function handleSubmit() : Promise<any> {
            fetch('/api/events');
        }
    });

  return (
    <>
      <h1>Здесь будут события ( или мероприятия)</h1>
      <form>
        <input type="text" name="title" placeholder="название" />
        <input type="text" name="description" placeholder="описание" />
        <input type="text" name="photo" placeholder="ссылка на фото" />
        <button type="submit"> Создать мероприятие</button>
      </form>
    </>
  );
}
