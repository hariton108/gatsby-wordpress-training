import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const Logo = () => (
  <StaticQuery
    query={graphql`
    {
      wordpressWpLogo {
        url {
          alt_text
          source_url
        }
      }
    }
    `}
    render={props => (
      <img src={props.wordpressWpLogo.url.source_url} alt={props.wordpressWpLogo.url.source_url} />
    )}
  />
)

export default Logo