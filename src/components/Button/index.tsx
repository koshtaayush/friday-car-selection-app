import React from 'react';
import styled from 'styled-components';

interface Props{
    onClickProp: () =>  void
    buttonType: 'S' | 'L'
}

const Button: React.FC<Props> = (props) => {

    const {onClickProp, buttonType} = props;
    return (
        <React.Fragment>
                <ButtonContainer
                    type="button"
                    name="sendMessage"
                    onClick={onClickProp}
                    disabled={false}
                    buttonType={buttonType}
                    test-id={'buttonTest'}>
                        Send
                </ButtonContainer>        
        </React.Fragment>
    )
}

export default Button


interface IButtonContainer{
    buttonType: string
}

const ButtonContainer  = styled.button<IButtonContainer>`
    background-color: #FF876D;
    color: #FFFFFF;
    height: 3.5rem;
    border: none;
    margin-left: 0.5rem;
    border-radius: 0.25rem;
    padding: ${(props) => props.buttonType === 'S' ? '0.5rem' : '1rem'};
    cursor: pointer;
    width: calc(100% - 1rem);
`
