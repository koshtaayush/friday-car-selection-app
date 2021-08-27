import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FETCH_ALL_MODELS } from './../../config/api.config';
import { useHistory } from 'react-router-dom'
import { makeGet } from './../../services/api.service';
import { getQueryParams } from './../../utils/getQueryParams';

interface Props {}

const Models: React.FC<Props> = () => {
    
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [makes, setMakes] = React.useState<Array<string>>([]);

    const history = useHistory();
    
    const handleInputOnChange = (value: string) => {

    }

    const handleMakeClick = (make: string) => {
        const modelUrl = make.toLowerCase().replace(' ', '-');
        history.push(`/vehicle?make=${modelUrl}`);
    }


    useEffect(() => {

        const makeId = getQueryParams(
            history.location?.search || '',
            'make'
        )

        console.log("make", makeId);



        fetchAllMakes()
    }, [])

    const fetchAllMakes = () => {
        makeGet(FETCH_ALL_MODELS)
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
            
        </React.Fragment>
    )


}

export default Models

