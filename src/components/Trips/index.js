import React from "react"
import {
  TripsContainer,
  TripsHeading,
  TripsWrapper,
  TripsCard,
  TripInfo,
  TextWrap,
  TripItemTitle,
  TripImage
} from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../UI/Button"
import { ImLocation } from 'react-icons/im'

function Trips() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allTrpisJson {
        edges {
          node {
            id
            name
            img {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TripsContainer>
      <TripsHeading>Discover Best Packages</TripsHeading>
      <TripsWrapper>
        {data?.allTrpisJson?.edges.map(item => {
          const image = getImage(item.node.img)
          return (
            <TripsCard key={item.node.id}>
              <TripImage image={image} alt={item.node.name} />
              <TripInfo>
                <TextWrap>
                  <ImLocation />
                  <TripItemTitle>{item.node.name}</TripItemTitle>
                </TextWrap>
                <Button to="/trips">View Destination</Button>
              </TripInfo>
            </TripsCard>
          )
        })}
      </TripsWrapper>
    </TripsContainer>
  )
}

export default Trips
