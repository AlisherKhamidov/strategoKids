import Data from './types/Data';

export default async function sendApplication(data: Data) : Promise<void> {
    const response = await fetch('/api/telegram', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-type': 'application/json',
      },
  });
 const result = await response.json();
  console.log(result, 'RESPONSE FETCH');
  }
