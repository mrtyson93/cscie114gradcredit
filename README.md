### Installation and Running Directions
Follow the below directions to get this repo up and running to test your GraphQL abilities.

#### Step 1: Checkout this repo

Using your preferred method of checking out a github repo, checkout this repo to your local computer.
My favorite is by running the following command:

```git clone https://github.com/mrtyson93/cscie114gradcredit.git```


#### Step 2: Install local requirements

In the terminal of your choice, run the following two commands in the root directory of this repo to install the requisite packages needed to run the website:

```npm install -g gatsby-cli```

```npm install```

This assumes you already have node 18 or higher installed, if you do not, you can install following directions [here](https://nodejs.org/en/download/package-manager)

#### Step 4: Run the website

Start the website locally by running the following command in the root directory of this repo:

```gatsby develop```

You should now be able to access the website locally at [http://localhost:8000/](http://localhost:8000/)

### Practice Problem

The practice problem to solve here is correctly filtering using a GraphQL query. At the bottom of the ```src/pages/index.js``` in this repo, 
you will see a stubbed out GraphQL query. The problem is to modify this query so that it filters specifically on the movie "Pinocchio". If you are
able to successfully do this, a success message will be displayed on localhost after rebuilding. 

### Solution

The expected query is as follows:

```
export const query = graphql`
    query MoviesPageQuery {
        allMoviesJson(filter: {title: {eq: "Piocchio"}}) {
            nodes {
                title
                year
                extract
                id
            }
        }
    }
`
````