import React from "react"
import Button from "@components/UI/Button"
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroItems,
} from "./styles"

import Video from '@assets/videos/travel1.mp4'

function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video}  type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <h1>Explore Unreal Desinations</h1>
          <p>Out of this world</p>
          <Button>Explore</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
