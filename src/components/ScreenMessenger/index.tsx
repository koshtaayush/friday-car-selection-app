import React from 'react';
import styled from 'styled-components';
import error from './../../assets/error.svg'

interface Props {
    primaryMessage: string
    secondaryMessage: string
}

const ScreenMessenger: React.FC<Props> = (props) => {

    const { primaryMessage, secondaryMessage } = props
    return (
        <React.Fragment>
            <Container>
                <Image src={error} />
                <Messages>
                    <PrimaryMessage>{primaryMessage}</PrimaryMessage>
                    <SecondaryMessage>{secondaryMessage}</SecondaryMessage>
                </Messages>
            </Container>
        </React.Fragment>
    )
}

export default ScreenMessenger

const Container  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 180px);
`

const Image = styled.img``

const Messages  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const PrimaryMessage  = styled.div`
    margin: 1rem;
    font-weight: bold;
`

const SecondaryMessage  = styled.div`
    color: #AAABAD
`