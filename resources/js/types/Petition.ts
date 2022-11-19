export interface Petition {
    id: string,
    img: string,
    title: string,
    excerpt: string,
    signatures: number,
    sponsors: number,
    category: string,
    date: string,
    author: {
        id: string,
        name: string,
        avatar: string
    }
}
