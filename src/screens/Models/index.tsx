import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FETCH_ALL_MODELS } from './../../config/api.config'
import { useHistory } from 'react-router-dom'
import { makeGet } from './../../services/api.service'
import { getQueryParams } from './../../utils/getQueryParams'
import Pill from './../../components/Pill'
import Search from './../../components/Search'
import ScreenMessenger from './../../components/ScreenMessenger'
import LoadingPill from './../../components/LoadingPill'

interface Props {}

const Models: React.FC<Props> = () => {
    const [searchValue, setSearchValue] = React.useState<string>('')
    const [models, setModels] = React.useState<Array<string>>([])
    const [isError, setIsError] = React.useState<boolean>(false)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const history = useHistory()

    const handleInputOnChange = (value: string) => {
        setSearchValue(value)
    }

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

    const fetchAllModels = () => {
        const makeId = getQueryParams(history.location?.search || '', 'make')

        let url = FETCH_ALL_MODELS + `?make=${makeId}`

        setIsLoading(true)

        makeGet(url)
            .then((res) => res.json())
            .then(
                (resp) => {
                    console.log(resp)
                    setIsLoading(false)

                    setModels(resp)
                    setIsError(false)
                },
                (err) => {
                    setIsLoading(false)

                    console.log('err', err)
                    setIsError(true)
                }
            )
            .catch((error) => {
                console.log('Error', error)
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
                            return modelValue.toLowerCase().includes(searchValue)
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
