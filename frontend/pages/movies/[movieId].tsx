
import Link from 'next/link'
import { baseUrl, getMovies, getStrapiURL } from '../../utilis/utils'
import styled from "styled-components";

export const BackLink = styled.div`
  margin: 1rem 0; 
`;

export const MoviePage = styled.div`
  display: flex;
`;

export const MovieContent = styled.div`
  margin: 1rem;
`;

export const MovieTitle = styled(MovieContent)`
  font-size: 2rem;
`;

export const MovieDesc = styled(MovieContent)`
  font-size: 1.4rem;
`;

export default function Movie({ movie }) {
  return (
    <>
      <BackLink>
        <Link href='/'>
          <a>&larr; Back to home</a>
        </Link>
      </BackLink>
      <MoviePage>
          <img
            className='rounded-lg w-full sm:w-64'
            src={getStrapiURL(movie.cover.url)}
            alt={movie.title}
          />
          <div>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieDesc>{movie.overview}</MovieDesc>
          </div>
    
      </MoviePage>
    </>
  )
}

export async function getStaticProps({ params }) {
  const movie = await getMovies(`${params.movieId}`)
  return {
    props: {
      movie
    }
  }
}

export async function getStaticPaths() {
  const movies = await getMovies()
  const paths = movies.map((movie) => {
    return {
      params: { movieId: String(movie.id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}