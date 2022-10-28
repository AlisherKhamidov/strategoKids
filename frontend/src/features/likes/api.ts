import Like, { LikeId } from './types/Like';
import LikeData from './types/LikeData';
import LikeState from './types/LikeState';

export async function loadLikes(): Promise<Like[]> {
    const response = await fetch('/api/likes');
    return response.json();
}

export async function addLike(like: LikeData): Promise<Like> {
        const response = await fetch('/api/likes', {
            method: 'POST',
            body: JSON.stringify(like),
            headers: {
                'Content-type': 'application/json',
            },
        });
        // console.log(response);
        const result = await response.json();
        return result.newLike;
    }
