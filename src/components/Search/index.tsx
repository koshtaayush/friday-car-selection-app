import React from 'react'
import styled from 'styled-components'
import Input from './../Input'

interface Props {
    placeholder: string
}

const Search: React.FC<Props> = (props) => {
    const [searchValue, setSearchValue] = React.useState<string>('')

    const { placeholder } = props;

    const handleInputOnChange = (value: string) => {}

    return (
        <React.Fragment>
            <TopSection>
                <Heading>Choose your car!</Heading>
                <InputContainer>
                    <Input
                        onChangeProp={handleInputOnChange}
                        inputValue={searchValue}
                        placeHolderText={placeholder}
                    />
                </InputContainer>
            </TopSection>
        </React.Fragment>
    )
}

export default Search

const TopSection = styled.div`
    background-color: #171717;
    color: #ffffff;
    padding-top: 30px;
    padding-bottom: 10px;
    margin-top: -1rem;
    margin-left: -2rem;
    padding-left: 2rem;
    margin-right: -2rem;
    padding-right: 2rem;
`

const Heading = styled.div`
    margin-bottom: 2rem;
`
const InputContainer = styled.div`
    position: relative;
`
