import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'

import MobileMenu from './MobileMenu'
import Links from './Links'
import Logo from './logo.png'
import Container from '../Container'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
       display:block;
        background: none;
        padding: 10px 0;
        margin:0 4px 0 0;
        background: ${theme.colors.white};
        border-bottom:thin rgba(122,122,122,.5) solid;
        img {
          padding:0;
          margin:0;
        }
       
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            padding:40px 0;
            justify-content:flex-start;
            display: flex;
            margin:0;
           
          `}
        >
          <div>
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
             display:flex;
              margin-left: 0;
              color: ${theme.colors.black};
              font-size: ${theme.fontsizes.xmiddle};
              
              letter-spacing:.09rem;
              img {
                width:70px;
                height:auto;
              }
               @media(min-width:1200px){
                margin-left:0px;
                img {
                  width:100px;
                  height:auto;
                }
               
               
              }
              

            `}
          >
             <img src={Logo}  alt="Logo" />
            
          </Link>
          </div>
          <div css={css`
             padding-left:30px;
             letter-spacing: .09rem;
             
             @media(max-width:560px){
              font-size: font-size:${theme.fontsizes.xmiddle};
              padding-top:5px;
              
             }
             @media(min-width:561px){
              font-size:${theme.fontsizes.great};
              letter-spacing:.4rem;
              margin-left:60px;
              
             }
             @media(min-width:1000px){
              font-size:${theme.fontsizes.xgreat};
              letter-spacing:.5rem;
              margin-left:60px;
             }
          `}>
          {siteTitle}
          </div>   
         
         <div>
         <MobileMenu>
              <Links />
            </MobileMenu>
         </div>
         
          
            
           
            
      
        
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
