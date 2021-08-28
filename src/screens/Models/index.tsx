//Library
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

//Other components
import Pill from './../../components/Pill'
import Search from './../../components/Search'
import ScreenMessenger from './../../components/ScreenMessenger'
import LoadingPill from './../../components/LoadingPill'

//Functions and configs
import { FETCH_ALL_MODELS } from './../../config/api.config'
import { makeGet } from './../../services/api.service'
import { getQueryParams } from './../../utils/getQueryParams'

interface Props {}

const Models: React.FC<Props> = () => {
    
    //Search Value present in input field
    const [searchValue, setSearchValue] = React.useState<string>('')

    //The list of models which is fetched from API based on make
    const [models, setModels] = React.useState<Array<string>>([])

    //To hold error state in case API fails
    const [isError, setIsError] = React.useState<boolean>(false)

    //Loading indicator to show loading screen
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const history = useHistory()

    /**
     * Function to handle the change in search input value and update the state
     */
    const handleInputOnChange = (value: string) => {
        setSearchValue(value)
    }

    /**
     * Function to change the route when model pill is clicked
     */
    const handleModelClick = (value: string) => {
        const makeValue = getQueryParams(
            history.location?.search || '',
            'make'
        )?.replace(' ', '-')
        const modelValue = value.toLowerCase().replace(' ', '-')
        history.push(`/vehicle?make=${makeValue}&model=${modelValue}`)
    }

    useEffect(() => {
        fetchAllModels()
    }, [])

    /**
     * Function to fetch the list of models from API based on make
     */
    const fetchAllModels = () => {
        const makeId = getQueryParams(history.location?.search || '', 'make')

        let url = FETCH_ALL_MODELS + `?make=${makeId}`

        setIsLoading(true)

        makeGet(url)
            .then((res) => res.json())
            .then(
                (resp) => {
                    setIsLoading(false)

                    setModels(resp)
                    setIsError(false)
                },
                (err) => {
                    setIsLoading(false)
                    setIsError(true)
                }
            )
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
            })
    }

    return (
        <React.Fragment>
            <Search 
                placeholder={'Search for a model'} 
                value={searchValue} 
                onChangeProp={handleInputOnChange} />

            <ModelsSection>
                {isLoading && (
                    <>
                        {[...Array(12)].map((e, i) => (
                            <LoadingPill />
                        ))}
                    </>
                )}

                {!isLoading && (
                    <>
                        {models.filter((modelValue) => {
                            return modelValue.toLowerCase().includes(searchValue.toLowerCase())
                        }).map((modelValue, index) => {
                            return (
                                <Pill
                                    onClickProp={() =>
                                        handleModelClick(modelValue)
                                    }
                                    key={index}
                                    value={modelValue}
                                />
                            )
                        })}
                    </>
                )}
            </ModelsSection>

            {isError && (
                <ScreenMessenger
                    primaryMessage={'Oops !! An error occured'}
                    secondaryMessage={'Please try again'}
                />
            )}
            
            {!isError && !isLoading && models.length === 0 && (
                <ScreenMessenger
                    primaryMessage={'No models found'}
                    secondaryMessage={'Please try to search for another make'}
                />
            )}
        </React.Fragment>
    )
}

export default Models

const ModelsSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;
    width: calc(100% - 2rem);
`
