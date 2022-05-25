import React from "react"
import MainMenu from "./mainManu"
import styled, {createGlobalStyle} from "styled-components"
import Logo from "./logo"
import { graphql, StaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const GlobalStyles = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  body{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <>
    <StaticQuery 
      query={graphql`
      {
        allWordpressWpFavicon {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
      `}
      render={props => (
        <Helmet>
          <link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} />
        </Helmet>
      )}
    />
    <GlobalStyles />
    <Logo />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </>
)

export default Layout
