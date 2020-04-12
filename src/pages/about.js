import React from 'react'
import {useTheme} from '../components/Theming'
import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from '@emotion/styled'
import {keyframes} from '@emotion/core'



const slidein = keyframes`
    0% {
      height:300px;
    }
   
    99% {
      height:110px;
    }
  }`
  const MyDiv = styled("div")`
 animation: ${slidein} 1s ease;
`
const About = () => {
    const theme = useTheme()
    const data = useStaticQuery(graphql`
    query {
        site {
          ...site
          siteMetadata {
            title
          }
        }
    }
    `)
    return(
        <Layout site={data.site}>
         <Hero 
          titel="Aktuell..."
          text="Bacharach ist gestorben"
         />
     
        <Container>
          <MyDiv>
          <h1 style={{fontSize:theme.fontsizes.great}}>
        Markt 1
     </h1>
     <p>verantwortlich:<br/>Verschönerungsverein</p>
     
     </MyDiv>
        </Container>
        </Layout>
     
    )
}

export default About


