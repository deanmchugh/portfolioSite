import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from '../components/heroImage'
import './styles.css'

const IndexPage = () => (
  <Layout>
    <>
      <SEO title="Home" />
      <div className={'indexPage'} >
        <div className={'heroImage'} >
            <HeroImage />
        </div>
      </div>
    </>
  </Layout>
)

export default IndexPage
