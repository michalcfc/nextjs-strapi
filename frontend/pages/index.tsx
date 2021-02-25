
import { GetServerSideProps } from 'next'

import { HomeProps } from "./Home.d"
import { getMovies } from '../utilis/utils'



const Home: React.FC<HomeProps> = ({ 
  movies 
}) => {
  console.log(movies)
  return (
    <>
    test
        
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