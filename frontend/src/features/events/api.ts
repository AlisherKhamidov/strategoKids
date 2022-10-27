import Event, { EventId } from './types/Event';

export async function loadEvents(): Promise<Event[]> {
    const response = await fetch('/api/events');
    return response.json();
}

export async function addEvent(event: any):Promise<Event> {
    const response = await fetch('/api/events', {
            method: 'POST',
            body: event,
        });
        const result = await response.json();
        return result.newEvent;
    }

    export async function deleteEvent(id: EventId): Promise<void> {
        await fetch(`/api/events/${id}`, {
          method: 'DELETE',
        });
    }

    export async function updateEvent(event: Event): Promise<void> {
        await fetch(`/api/events/${event.id}`, {
          method: 'PUT',
          body: JSON.stringify(event),
          headers: {
            'Content-Type': 'application/json',
          }
        });
}
