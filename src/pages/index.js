/** @jsx */
import React from 'react'
import { graphql} from 'gatsby'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'

import Img from 'gatsby-image'

import Hero from '../components/Hero'



const slidein = keyframes `
    from {
      margin-left:-100%;
      width: 100%;
  
    }
    to {
      margin-left:0;
      width: 100%;
    }
  
  }`

  const MyDiv = styled.div`
  animation: ${slidein} 1s ease;
 `

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
  font-size:1.15rem;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  
  
  return (
    <Layout site={site}>
      
      <Hero
        titel="Bacharach..."
       text="beim Sterben zusehen?"
      />
      <Container
        css={css`
         
          display:flex;
          flex-wrap: wrap;
          @media(max-width:796px){
            flex-direction: column;
          }
        `}
      >
         
        {allMdx.edges.map(({ node: post }) => (
          
          <div
            key={post.id}
            css={css`
            
          padding-bottom: 0;
              margin-bottom: 40px;
              max-width:48%;
              margin:1%;
              @media(max-width:796px){
                max-width:98%;
              }
              
            `}
          >
            <MyDiv>
            <h2
              css={css({
                fontSize: theme.fontsizes.xmiddle,
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <Img
                sizes={post.frontmatter.banner.childImageSharp.sizes}
                alt={site.siteMetadata.keywords.join(', ')}
              />
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                <br/>mehr →
              </Link>
            </Description>
            </MyDiv>
            </div>
            
          
        ))}
      <Container css={css`
        width:90%;
      `}>
       
      </Container>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 7
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 90)
          id
          fields {
            title
            slug
            date
            
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
