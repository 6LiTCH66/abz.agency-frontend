export interface User{
    id: number,
    name: string,
    email: string,
    phone: string,
    position_id: number,
    photo: string,
}

interface Links{
    next_url: string | null,
    prev_url: string | null
}

export interface UserList{
    page: number,
    total_users: number,
    total_pages: number,
    count: number,
    links: Links,
    users: User[]
}

export interface Pagination{
    page: number;
    count: number;
}

export interface UserCreationForm{
    name: string,
    email: string,
    phone: string
    position_id: string
}