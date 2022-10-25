import Data from './types/Data';

export default async function createApplication(data: Data): Promise<Data> {
    const response = await fetch('/api/applications', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
    });
    // console.log(response);
    if (response.status >= 400) {
        const { error } = await response.json();
        throw error;
      }
    const result = await response.json();
    console.log(result);
    return result;
}
