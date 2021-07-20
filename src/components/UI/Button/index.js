import React from 'react'
import { StyledButton } from './styles'

const ButtonLoader = () => (
  <>
    <div>
        Loading...
    </div>
  </>
);

const Button = React.forwardRef(({
    children,
    variant,
    round,
    size,
    disabled,
    onClick,
    isLoading,
    ...restProps
}, ref) =>{
    const handleClick = () => {
        if (!disabled && !isLoading) {
            onClick();
        }
    };

    return (
        <StyledButton
            {...restProps}
            variant={variant}
            disabled={disabled}
            size={size}
            onClick={handleClick}
            ref={ref}
            round={round}
        >
            {isLoading ? 
            <ButtonLoader />
            :
            children
            }
        </StyledButton>
    )
})

Button.defaultProps={
    className: undefined,
    children: undefined,
    variant: 'primary',
    size:'lg',
    disabled: false,
    isLoading: false,
    round: true,
    onClick: () => {},
}

export default Button