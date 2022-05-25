import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PortfolioItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`

const FeaturedImg = styled.img`
  max-width: 100%;  
`

const PortfolioItems = () => (
  <StaticQuery 
    query={graphql`
    {
      allWordpressWpPortfolio {
        edges {
          node {
            id
            slug
            title
            excerpt
            content
            featured_media {
              source_url
            }
          }
        }
      }
    } 
    `}
    render={props => (
      <PortfolioItemsWrapper>
        {props.allWordpressWpPortfolio.edges.map(portfolio => (
          <PortfolioItem id={portfolio.node.id}>
            <h2>{portfolio.node.title}</h2>
            <FeaturedImg src={portfolio.node.featured_media.source_url} alt={portfolio.node.title} />
            <div dangerouslySetInnerHTML={{__html: portfolio.node.excerpt}} />
            <Link to={`/portfolio/${portfolio.node.slug}`}>Read More</Link>
          </PortfolioItem>
        ))}
      </PortfolioItemsWrapper>
    )}
  />
)

export default PortfolioItems