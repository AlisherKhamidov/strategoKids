import Data from '../applications/types/Data';

export async function loadApplications(): Promise<Data[]> {
    const response = await fetch('/api/admin/adminApplications');
    return response.json();
}

export async function updateApplicationsLoading(application: { status: boolean, appId: number }): Promise< Data > {
  const response = await fetch('/api/admin/change', {
      method: 'PUT',
      body: JSON.stringify(application),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data, 'DATA>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<');

    return data;
  }
