/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Footer } from './footer'
import "./layout.css"
import { Box } from "@mui/material"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box sx={{ height: '100%', backgroundColor: '#f1f1f1'}}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          backgroundColor: '#f1f1f1',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#f1f1f1',

          }}
        >
          <Box
            sx={{ maxWidth: '800px',
          margin: '20px', flex: 1,}}
            >
          {children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
