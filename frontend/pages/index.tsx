import { GetServerSideProps } from 'next'
import Link from 'next/link'

import Card     from "@components/Card"
import Grid     from "@components/Grid"

import Hero from "./../layout/Hero"

import { HomeProps } from "./Home.d"
import { getMovies, getStrapiURL,baseUrl } from '../utilis/utils'



const Home: React.FC<HomeProps> = ({ 
  movies 
}) => {
  console.log(movies)
  return (
    <>
    <h2 style={{fontSize: "2rem", padding: "1rem 0"}}>Latest movie</h2>
     <Grid 
        gridGap="20px"
        columns="repeat(auto-fit, minmax(220px, 1fr));"  
      >
        {movies.map(movie => {
          return (
            <Link key={movie.title} href={`/movies/${movie.id}`}>
            <a>
              <Card
                hoverEffect
                key={movie.id}
                img={getStrapiURL(movie.cover.url)}
                title={movie.title}
              >
              </Card>
            </a>
            </Link>
          )})}
      </Grid>
    </>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await getMovies()
  return {
    props: {
      movies
    }
  }
}