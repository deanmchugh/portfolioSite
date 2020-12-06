import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadshotHero from '../components/headshotHero'
import HomeBackgroundImg from '../components/homeBackgroundImg'
import './styles.css'

const IndexPage = () => (
  <Layout>
    <HomeBackgroundImg>
      <>
        <SEO title="Home" />
        <div className={'indexPage'}>
          <div className={'headshot'} >
              <HeadshotHero />
          </div>
        </div>
      </>
    </HomeBackgroundImg>
  </Layout>
)

export default IndexPage
