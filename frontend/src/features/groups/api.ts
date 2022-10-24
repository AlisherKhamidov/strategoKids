import Group, { GroupId } from './types/Group';

export async function loadGroups(): Promise<Group[]> {
  const response = await fetch('/api/groups');
  // console.log(response);
  return response.json();
}

export async function createGroup(group: {
  title: string;
  img: string;
  info: string;
}): Promise<Group> {
  const response = await fetch('/api/groups', {
    method: 'POST',
    body: JSON.stringify(group),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result.newGroup;
}
// /jjjj
export async function deleteGroup(id: GroupId): Promise<void> {
    await fetch(`/api/groups/${id}`, {
      method: 'DELETE',
    });
}
