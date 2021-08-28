import React from 'react';
import styled from 'styled-components';

interface Props {
    value: string
    onClickProp: (element: string) => void
}

const Pill: React.FC<Props> = (props) => {

    const { value, onClickProp } = props
    return (
        <React.Fragment>
            <PillContainer onClick={() => onClickProp(value)}>
                <Name>{value.toLowerCase()}</Name>
            </PillContainer>
        </React.Fragment>
    )
}

export default Pill

const PillContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    width: 30%;
    border: 1px solid #e1e1e1;
    margin: 0.25rem;
    border-radius: 4px;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }

    &:hover {
        border: 1px solid #468FF7;
        background: #468FF7;
        color: #fff;

    }
`

const Name = styled.div`
    height: 10%;
    width: 100%;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
`