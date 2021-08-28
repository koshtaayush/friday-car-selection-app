import React from 'react'
import styled from 'styled-components'

interface Props {
    onChangeProp: (val: string) => void
    inputValue: string
    placeHolderText: string
}

const Input: React.FC<Props> = (props) => {
    const { onChangeProp, inputValue, placeHolderText } = props

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (onChangeProp) {
            onChangeProp(value)
        }
    }

    return (
        <React.Fragment>
            <InputBox
                type="text"
                placeholder={placeHolderText}
                onChange={handleInputChange}
                value={inputValue}
                test-id="input"
            />
        </React.Fragment>
    )
}

export default Input

const InputBox = styled.input`
    border: 0.125rem solid;
    color: #000000;
    height: 3em;
    border-radius: 0.25rem;
    width: calc(100% - 2rem);
    padding: 0.5rem;
    position: absolute;
    bottom: -3rem;
`
