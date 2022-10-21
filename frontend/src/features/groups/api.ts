import Group, { GroupId } from './types/Group';

export async function loadGroups(): Promise<Group[]> {
    const response = await fetch('/api/groups'); 
    // console.log(response);
    return response.json();
}