export interface Petition {
    id: String,
    img: String,
    title: String,
    excerpt: String,
    signatures: Number,
    sponsors: Number,
    category: String,
    date: String,
    author: {
        id: String,
        name: String,
        avatar: String
    }
}
