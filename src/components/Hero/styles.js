import styled from "styled-components"

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    height: 100vh;
    color: #fff;

    :before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,0.6) 100%), 
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem 2rem;
`
export const HeroItems = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;

  h1 {
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
    font-size: clamp(1.5rem, 6vw, 4rem);
  }

  p {
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
  }
`
