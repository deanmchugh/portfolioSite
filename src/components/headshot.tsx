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
        marginTop: '20px',
        border: '5px solid rgb(171, 32, 253)',
        boxShadow: '0 0 3vw rgb(171, 32, 253)',
        width: '40vw',
        height: '40vw',
      }}
    />
  )
}

export default HeadShot
