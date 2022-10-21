import Data from './Data';

export default async function createApplication(data: Data): Promise<Data> {
    const response = await fetch('/api/applications', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
    });
    // console.log(response);
    const result = await response.json();
    return result;
}
