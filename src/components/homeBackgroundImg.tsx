import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactElement } from 'react'
import BackgroundImage from 'gatsby-background-image'

interface Props {
    children: ReactElement
}

const HomeBackgroundImg = ({ children }: Props): ReactElement => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "tokyoStreet.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 3000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
  `)
    
  if (!data?.image?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  } 

  return (
      <BackgroundImage
        fluid={data.image.childImageSharp.fluid}
      >
          {children}
      </BackgroundImage>
  )
}

export default HomeBackgroundImg