import React, { ReactElement } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './styles.css'

const HeadShot = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "headShot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img 
      fluid={data.placeholderImage.childImageSharp.fluid} 
      imgStyle={{
        borderRadius: `50%`,
        width: '50vw',
        height: '50vw',
      }}
    />
  )
}

export default HeadShot
