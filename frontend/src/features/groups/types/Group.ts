export default interface Group {
    id: number;
    title: string;
    img: string;
    info: string;
  }
  
  export type GroupId = Group['id'];