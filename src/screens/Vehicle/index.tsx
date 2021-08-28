import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FETCH_VEHICLE } from './../../config/api.config';
import { useHistory } from 'react-router-dom'
import { makeGet } from './../../services/api.service';
import { getQueryParams } from './../../utils/getQueryParams';
import  { IVehicle } from './../../typings/sharedInterfaces';

interface Props {}

const Vehicle: React.FC<Props> = () => {
    
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [vehicles, setVehicles] = React.useState<Array<IVehicle>>([]);    

    const history = useHistory();
    
    const handleInputOnChange = (value: string) => {

    }

    const handleModelClick = (value: IVehicle) => {
        const makeValue = value.make.toLowerCase().replace(' ', '-');
        const modelValue = value.model.toLowerCase().replace(' ', '-');
        history.push(`/vehicle?make=${makeValue}?model=${modelValue}`);
    }


    useEffect(() => {
        fetchAllVehicleInformation()
    }, [])

    const fetchAllVehicleInformation = () => {
        const makeValue = getQueryParams(
            history.location?.search || '',
            'make'
        )
        
        const modelValue = getQueryParams(
            history.location?.search || '',
            'model'
        )

        console.log("makeValue", makeValue)
        console.log("modelValue", modelValue)
        let url = FETCH_VEHICLE + `?make=${makeValue}` + `&model=${modelValue}`
        makeGet(url)
            .then((res) =>  res.json())
            .then((resp) => {
                console.log(resp);
                setVehicles(resp);
            }, (err) => {
                console.log("err", err)
            })
            .catch((error) => {
                console.log("Error", error)
            })
    }

    return (
        <React.Fragment>
            {
                vehicles.map((vehicle) => {
                    return <VehicleCard>
                        Make: {vehicle.make}
                        Model: {vehicle.make}
                        Engine Power: {vehicle.enginePowerPS}
                    </VehicleCard>
                })
            }
        </React.Fragment>
    )


}

export default Vehicle


const VehicleCard  = styled.div`
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
