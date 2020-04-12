import React from 'react'
import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
const MLayout = ({children}) => {
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
        <Layout site={data.site} >
          <Hero 
          publish="false"
          titel="So geh weg in die Metropolem"
          text="Hier ist das Suchen mit der Laterne ergebnislos "
          />
            <Container>
        {children}
        </Container>
        </Layout>
    )
}

export default MLayout


