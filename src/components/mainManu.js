import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './siteInfo';

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: blue;
`

const MainMenuInner = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  width: 960px;
  height: 100%;
`

const MenuItem = styled(Link)`
  display: block;
  padding: 16px;
  color: white;
`

const MainMenu = () => (
    <StaticQuery 
        query={graphql`
        {
          allWordpressWpApiMenusMenusItems(filter: {
            name: {
              eq: "Main menu"
            }}) {
            edges {
              node {
                items {
                  title
                  object_slug
                }
                name
              }
            }
          }
        }
        `}
        render={props => (
          <MainMenuWrapper>
            <MainMenuInner>
              <SiteInfo />
              {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <MenuItem to={`/${item.object_slug}`} id={item.title}>
                  {item.title}
                </MenuItem>
              ))}
            </MainMenuInner>
          </MainMenuWrapper>
        )}
    />
)

export default MainMenu