import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from './../../components/Input';
import { makeGet } from './../../services/api.service';
import { useHistory } from 'react-router-dom'

import { FETCH_ALL_MAKES } from './../../config/api.config';

interface Props {}

const Makes: React.FC<Props> = () => {

    const [searchValue, setSearchValue] = React.useState<string>('');
    const [makes, setMakes] = React.useState<Array<string>>([]);

    const history = useHistory();
    
    const handleInputOnChange = (value: string) => {

    }

    const handleMakeClick = (make: string) => {
        const makeUrl = make.toLowerCase().replace(' ', '-');
        history.push(`/model?make=${makeUrl}`);
    }


    useEffect(() => {
        fetchAllMakes()
    }, [])

    const fetchAllMakes = () => {
        makeGet(FETCH_ALL_MAKES)
            .then((res) =>  res.json())
            .then((resp) => {
                console.log(resp);
                setMakes(resp);
            }, (err) => {
                console.log("err", err)
            })
            .catch((error) => {
                console.log("Error", error)
            })
    }

    
    return (
        <React.Fragment>
            <TopSection>
            <Heading>Choose your car!</Heading>
            <InputContainer>
                <Input   
                    onChangeProp={handleInputOnChange}
                    inputValue={searchValue}
                    placeHolderText={'Search for a make'}
                />
            </InputContainer>
            </TopSection>

            <MakesSection>
                {
                    makes.map((make, index) => {
                        return <Make key={index} onClick={() => handleMakeClick(make)}>
                            <Image></Image>
                            <Name>{make}</Name>
                        </Make>
                    })
                }
            </MakesSection>
        </React.Fragment>
    )


}

export default Makes

const TopSection  = styled.div`


`


const Heading  = styled.div`

`
const InputContainer  = styled.div`

`

const MakesSection  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`


const Make = styled.div`
    display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 80px;
      height: 80px;
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;

`

const Image  = styled.div`
    height: 90%;
    width: 100%;
`

const Name  = styled.div`
    color: #e1e1e1;
    height: 10%;
    width: 100%;

`