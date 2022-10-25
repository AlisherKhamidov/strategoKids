export default interface Event {
    id: number;
    title: string;
    description: string;
    photo : string;
    isTournament: boolean;
  }

  export type EventId = Event['id'];
