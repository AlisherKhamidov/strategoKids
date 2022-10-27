import Group, { GroupId } from './types/Group';

export async function loadGroups(): Promise<Group[]> {
  const response = await fetch('/api/groups');
  // console.log(response);
  return response.json();
}

export async function createGroup(group: any): Promise<Group> {
  const response = await fetch('/api/groups', {
    method: 'POST',
    body: group,
  });
  const result = await response.json();
  return result.newGroup;
}

export async function deleteGroup(id: GroupId): Promise<void> {
    await fetch(`/api/groups/${id}`, {
      method: 'DELETE',
    });
}

export async function updateGroup(group: Group): Promise<void> {
  await fetch(`/api/groups/${group.id}`, {
    method: 'PUT',
    body: JSON.stringify(group),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
