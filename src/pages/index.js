import * as React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby';


const pinocchio = "Pinocchio"

const IndexPage = ({ data }) => {
  const movies = data.allMoviesJson.nodes;
  return (
    <Layout pageTitle="GraphQL Practice">
    <div>
      {movies?.length === 1 && movies[0].title === pinocchio &&
        <div>
          <p>Congratulations! You successfully queried and filtered specifically for the movie {pinocchio} in GraphQL!</p>
        </div>
      }

      {(movies?.length !== 1 || movies[0].title !== pinocchio) &&
        <div>
          <p>Sorry! You haven't successfully queried for the pinocchio movie yet.</p>
        </div>
      }
    </div>
  </Layout>
  )
}

export const query = graphql`
    query MoviesPageQuery {
        allMoviesJson {
          edges {
            node {
              id
            }
          }
        }
    }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
