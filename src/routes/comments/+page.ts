
type Comment = {
    id:string;
    content:string;
    name:string;
}

export const load = async() => {
    const res = await fetch('http://localhost:4000/comments');
    const comments = ((await res.json()) as Comment[]);
    return { comments };
}