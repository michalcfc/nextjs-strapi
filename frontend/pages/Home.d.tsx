interface Movie {
    id: number
    title: string
    cover: {url: string}
}
export interface HomeProps {
    movies: [Movie];
}