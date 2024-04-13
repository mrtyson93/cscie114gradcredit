import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
    content,
    footer,
    header,
    heading,
    siteTitle,
} from './layout.module.css'

const Layout = (props) => {
    const children = props.children;  
    const pageTitle = props.pageTitle; 

    const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
                title
            }
        }
        }
    `)

    return (
        <div className={content}>
            <header className={header}>
                <h1 className={siteTitle}><Link to="/">{data.site.siteMetadata.title}</Link></h1>
            </header>
            <main>
                <h2 className={heading}>{pageTitle}</h2>
                {children}
            </main>
            <footer className={footer}>
                Developed by Mitchell Tyson, Graduate Credit Assignment, for CSCI E-114, Spring 2024.
            </footer>
        </div>
    )
}

export default Layout