import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FETCH_VEHICLE } from './../../config/api.config'
import { useHistory } from 'react-router-dom'
import { makeGet } from './../../services/api.service'
import { getQueryParams } from './../../utils/getQueryParams'
import { IVehicle } from './../../typings/sharedInterfaces'
import CarImg from './../../assets/car.svg'
import LoadingPill from './../../components/LoadingPill'
import ScreenMessenger from './../../components/ScreenMessenger'

interface Props {}

const Vehicle: React.FC<Props> = () => {
    const [vehicles, setVehicles] = React.useState<Array<IVehicle>>([])
    const [makeSelected, setMakeSelected] = React.useState<string | null>('')
    const [modelSelected, setModelSelected] = React.useState<string | null>('')
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isError, setIsError] = React.useState<boolean>(false)
    const history = useHistory()

    useEffect(() => {
        fetchAllVehicleInformation()
    }, [])

    const fetchAllVehicleInformation = () => {
        const makeValue = getQueryParams(history.location?.search || '', 'make')
        setMakeSelected(makeValue)

        const modelValue = getQueryParams(
            history.location?.search || '',
            'model'
        )

        setModelSelected(modelValue)

        let url = FETCH_VEHICLE + `?make=${makeValue}` + `&model=${modelValue}`

        setIsLoading(true)
        makeGet(url)
            .then((res) => res.json())
            .then(
                (resp) => {
                    console.log(resp)
                    setVehicles(resp)
                    setIsLoading(false)
                    setIsError(false)
                },
                (err) => {
                    setIsLoading(false)
                    setIsError(true)
                    console.log('err', err)
                }
            )
            .catch((error) => {
                setIsLoading(false)
                    setIsError(true)
                console.log('Error', error)
            })
    }

    return (
        <React.Fragment>
            <MakeAndModel>
                <InfoSelected>Make: {makeSelected}</InfoSelected>
                <InfoSelected>Model: {modelSelected}</InfoSelected>
            </MakeAndModel>

            <VehicleSection>
                {isLoading && (
                    <>
                        {[...Array(12)].map((e, i) => (
                            <LoadingPill />
                        ))}
                    </>
                )}
                {vehicles.map((vehicle) => {
                    return (
                        <VehicleCard>
                            <CarImageContainer>
                                <CarImage src={CarImg} />
                            </CarImageContainer>
                            <Info>
                                <Label>
                                    <Legend>Engine Power In PS: </Legend>
                                    <Value>{vehicle.enginePowerPS} PS</Value>
                                </Label>
                                <Label>
                                    <Legend>Engine Power In KW: </Legend>
                                    <Value>{vehicle.enginePowerPS} KW</Value>
                                </Label>
                                <Label>
                                    <Legend>Fuel Type: </Legend>
                                    <Value>{vehicle.enginePowerKW} KW</Value>
                                </Label>
                                <Label>
                                    <Legend>Body Type: </Legend>
                                    <Value>{vehicle.bodyType}</Value>
                                </Label>
                                <Label>
                                    <Legend>Engine Capacity: </Legend>
                                    <Value>{vehicle.engineCapacity}</Value>
                                </Label>
                            </Info>
                        </VehicleCard>
                    )
                })}
            </VehicleSection>

            {isError && (
                <ScreenMessenger
                    primaryMessage={'Oops !! An error occured'}
                    secondaryMessage={'Please try again'}
                />
            )}
        </React.Fragment>
    )
}

export default Vehicle

const MakeAndModel = styled.div`
    background-color: #171717;
    color: #ffffff;
    padding: 2rem 2rem 1rem 2rem;
    margin: -1rem -2rem 0 -2rem;
    padding: 1rem 3rem;

`

const InfoSelected = styled.div`
        font-size: 1.5rem;
`

const CarImageContainer = styled.div`
    /* width: 300px; */
    width: 50%;
    height: 150px;
    margin-right: 1rem;
    @media only screen and (max-width: 600px) {
        width: 35%;
    }
`
const Info = styled.div``

const CarImage = styled.img`
    height: 150px;
    /* width: 300px; */
    width: 100%;
    object-fit: scale-down;
`

const VehicleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;
`

const VehicleCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    min-width: 30%;
    border-color: #d3d5df;
    box-shadow: 0 4px 7px 0 rgba(218,220,230,.6);
    padding: 1rem;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    @media only screen and (max-width: 600px) {
        /* flex-direction: column; */
        align-items: flex-start;

    }
`

const Legend = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0.5rem;
`
const Value = styled.div`
    color: #686b78;
    font-size: 16px;
    margin-bottom: 0.5rem;
`
