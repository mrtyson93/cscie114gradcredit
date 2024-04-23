import * as React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby';



const IndexPage = ({ data }) => {
  const movies = data.allMoviesJson.nodes;
  console.log("yeehaw" + movies)
  return (
    <Layout pageTitle="An Anthology of Adam Driver Movies">
    <div>
      <ul>
        {movies.map((movie) => {
            return (
                <li key={movie.title}>
                    <p>{movie.year}</p>
                </li>)
        })}
      </ul>      
    </div>
  </Layout>
  )
}

export const query = graphql`
    query MoviesPageQuery {
        allMoviesJson {
            nodes {
                title
                year
            }
        }
    }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
