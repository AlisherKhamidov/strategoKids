import Data from '../applications/types/Data';

export async function loadApplications(): Promise<Data[]> {
    const response = await fetch('/api/adminApplications');
    return response.json();
}

export async function loadApplicationsAccepted(): Promise<Data[]> {
    const response = await fetch('/api/adminApplicationsAccepted');
    return response.json();
}

export async function updateApplicationsLoading(application: Data): Promise<void> {
    await fetch(`/api/adminApplications/${application.id}`, {
      method: 'PUT',
      body: JSON.stringify(application),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
