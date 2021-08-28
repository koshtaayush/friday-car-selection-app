import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface Props {
}

const LoadingPill: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            <PillContainer></PillContainer>
        </React.Fragment>
    )
}

export default LoadingPill

const keyframesShimmer = keyframes`
	from {
		background-position: -80vw 0;
	}
	to {
		background-position: 80vw 0;
	}
`

const shimmerAnimation = css`
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 100vw 100%;
    animation: ${keyframesShimmer} 2s infinite linear;
`

const PillContainer = styled.div`
    width: 30%;
    margin: 0.25rem;
    height: 2rem;
    border-radius: 4px;
    ${shimmerAnimation}

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`
