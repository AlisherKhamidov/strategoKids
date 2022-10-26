import Kid, { KidId } from './types/Kid';
import KidData from './types/KidData';

export async function loadKids(): Promise<Kid[]> {
    const response = await fetch('/api/kids');
    return response.json();
}

export async function addKid(kid: KidData): Promise<Kid> {
        const response = await fetch('/api/kids', {
            method: 'POST',
            body: JSON.stringify(kid),
            headers: {
                'Content-type': 'application/json',
            },
        });
        // console.log(response);
        const result = await response.json();
        return result.newKid;
    }

//     export async function deleteEvent(id: EventId): Promise<void> {
//         await fetch(`/api/events/${id}`, {
//           method: 'DELETE',
//         });
//     }

//     export async function updateEvent(event: Event): Promise<void> {
//         await fetch(`/api/events/${event.id}`, {
//           method: 'PUT',
//           body: JSON.stringify(event),
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });
// }
