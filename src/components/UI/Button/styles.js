import styled, { css } from "styled-components"

import { color, font, mixin } from "../../../utils/styles/styles"

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  line-height: 1;
  padding: 0 12px;
  white-space: nowrap;
  transition: all 0.1s;
  appearance: none;
  border: none;
  outline: 0;
  min-width:100px;
  ${mixin.clickable}
  ${font.size(14.5)}
  ${props => buttonVariants[props.variant]}
  ${props => buttonSizes[props.size]}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  border-radius: ${({ round }) => (round ? "50px" : "none")};
`

const colored = css`
  color: #fff;
  background: ${props => color[props.variant].default};
  &:not(:disabled) {
    &:hover {
      background: ${props => color[props.variant].hover};
      transform: translateY(-2px);
    }
    &:active {
      background: ${props => color[props.variant].active};
    }
    ${props =>
      props.isActive &&
      css`
        background: ${color[props.variant].active} !important;
      `}
  }
`

const buttonSizes = {
  lg: css`
    padding: 0.5rem 1rem !important;
    font-size: 1.25rem !important;
    line-height: 1.5 !important;
    border-radius: 0.3rem;
  `,
  md: css`
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
  `,
  sm: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  `,
}

const buttonVariants = {
  primary: colored,
  secondary: colored,
  success: colored,
  danger: colored,
}

export { StyledButton }
