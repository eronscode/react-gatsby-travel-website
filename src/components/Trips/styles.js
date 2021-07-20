import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const TripsContainer = styled.div`
 min-height: 100vh;
 padding: 5rem calc((100vw - 1300px) / 2);
 background: #fff;
 color: #fff;
`
export const TripsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`
export const TripsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
    padding: 0px 2rem;
    @media screen  and (max-width:1200px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen  and (max-width:800px){
        grid-template-columns: 1fr;
    }
`
export const TripsCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: all 0.2s ease 0s;
`
export const TripImage = styled(GatsbyImage)`
        height: 100%;
        width: 100%;
        position: absolute;
        border-radius: 10px;
        filter: brightness(60%);
        transition: all 0.4s cubic-bezier(0.075, 0.02, 0.165, 1) 0s;
        
        &:hover{
            filter: brightness(100%)
        }
`
export const TripInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 2rem;

    button{
        position: absolute;
        top: 420px;
        font-size: 14px;
    }
`
export const TextWrap = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    top: 372px;
`
export const TripItemTitle = styled.div`
    font-weight: 450;
    font-size: 1rem;
`