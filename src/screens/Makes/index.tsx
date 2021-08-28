import React, { useEffect } from 'react'
import styled from 'styled-components'
import { makeGet } from './../../services/api.service'
import { useHistory } from 'react-router-dom'
import Search from './../../components/Search'
import Pill from './../../components/Pill'
import LoadingPill from './../../components/LoadingPill'
import { FETCH_ALL_MAKES } from './../../config/api.config'
import ScreenMessenger from './../../components/ScreenMessenger'

interface Props {}

const Makes: React.FC<Props> = () => {
    const [searchValue, setSearchValue] = React.useState<string>('')
    const [makes, setMakes] = React.useState<Array<string>>([])
    const [isError, setIsError] = React.useState<boolean>(false)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const history = useHistory()

    const handleInputOnChange = (value: string) => {
        setSearchValue(value)
    }

    const handleMakeClick = (make: string) => {
        const makeUrl = make.toLowerCase().replace(' ', '-')
        history.push(`/model?make=${makeUrl}`)
    }

    useEffect(() => {
        fetchAllMakes()
    }, [])

    const fetchAllMakes = () => {
        setIsLoading(true)
        makeGet(FETCH_ALL_MAKES)
            .then((res) => res.json())
            .then(
                (resp) => {
                    console.log(resp)
                    setMakes(resp)
                    setIsLoading(false)
                    setIsError(false)
                },
                (err) => {
                    setIsError(true)
                    setIsLoading(false)
                    console.log('err', err)
                }
            )
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
                console.log('Error', error)
            })
    }

    return (
        <React.Fragment>
            <Search 
                placeholder={'Search for a make'} 
                onChangeProp={handleInputOnChange} 
                value={searchValue} />
                
            <MakesSection>
                {isLoading && (
                    <>
                        {[...Array(12)].map((e, i) => (
                            <LoadingPill />
                        ))}
                    </>
                )}

                {!isLoading && (
                    <>
                        {makes.filter((makeValue) => {
                            return makeValue.toLowerCase().includes(searchValue)
                        }).map((make, index) => {
                            return (
                                <Pill
                                    key={index}
                                    onClickProp={() => handleMakeClick(make)}
                                    value={make}
                                />
                            )
                        })}
                    </>
                )}
            </MakesSection>

            {isError && (
                <ScreenMessenger
                    primaryMessage={'Oops !! An error occured'}
                    secondaryMessage={'Please try again'}
                />
            )}
        </React.Fragment>
    )
}

export default Makes

const MakesSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;
    width: calc(100% - 2rem);
`