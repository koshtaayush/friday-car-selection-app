//Library
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

//Other Components
import Search from './../../components/Search'
import Pill from './../../components/Pill'
import LoadingPill from './../../components/LoadingPill'
import ScreenMessenger from './../../components/ScreenMessenger'

//Functions and configs
import { makeGet } from './../../services/api.service'
import { FETCH_ALL_MAKES } from './../../config/api.config'

interface Props {}

const Makes: React.FC<Props> = () => {

    //Loading indicator to show loading screen
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    
    //Search Value present in input field
    const [searchValue, setSearchValue] = React.useState<string>('')

    //The list of makes which is fetched from API
    const [makes, setMakes] = React.useState<Array<string>>([])

    //To hold error state in case API fails
    const [isError, setIsError] = React.useState<boolean>(false)

    const history = useHistory()

    /**
     * Function to handle the change in search input value and update the state
     */
    const handleInputOnChange = (value: string) => {
        setSearchValue(value)
    }

    /**
     * Function to change the route when make pill is clicked
     */
    const handleMakeClick = (make: string) => {
        const makeUrl = make.toLowerCase().replace(' ', '-')
        history.push(`/model?make=${makeUrl}`)
    }

    useEffect(() => {
        fetchAllMakes()
    }, [])


    /**
     * Function to fetch the list of makes from API
     */
    const fetchAllMakes = () => {
        setIsLoading(true)
        makeGet(FETCH_ALL_MAKES)
            .then((res) => res.json())
            .then(
                (resp) => {
                    setMakes(resp)
                    setIsLoading(false)
                    setIsError(false)
                },
                (err) => {
                    setIsError(true)
                    setIsLoading(false)
                }
            )
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
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
                        {[...Array(12)].map((e, index) => (
                            <LoadingPill test-id="makeLoadingPill" key={index} />
                        ))}
                    </>
                )}

                {!isLoading && (
                    <>
                        {makes.filter((makeValue) => {
                            return makeValue.toLowerCase().includes(searchValue.toLowerCase())
                        }).map((make, index) => {
                            return (
                                <Pill
                                    key={index}
                                    onClickProp={() => handleMakeClick(make)}
                                    value={make}
                                    test-id="makePill"
                                />
                            )
                        })}
                    </>
                )}
            </MakesSection>

            {isError && (
                <ScreenMessenger
                    test-id="makeError"
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