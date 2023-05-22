import React, {useState} from "react";
import { CssBaseline, Grid } from '@material-ui/core';

import {getPlacesData} from './api';

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { useEffect } from 'react';

const Explore = ()=> {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({ });
    const [bounds, setBounds] = useState({});
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(( {coords: {latitude, longitude}}) => {
            setCoordinates({ lat: latitude, lng: longitude})

        })
    }, [])
    
    useEffect(() => {
        const filteredPlaces = places.filter((place) => Number(place.rating) > rating);
    
        setFilteredPlaces(filteredPlaces);
      }, [rating]);

    useEffect(() => {
        //console.log(coordinates, bounds);
        getPlacesData(type, bounds.sw, bounds.ne)
        //getPlacesData()
        .then((data) => {
            console.log(data);
            if (typeof data != 'undefined'){
                setPlaces(data);
                setFilteredPlaces([])
            }

        })
    }, [type, coordinates, bounds])

    return  (
        <> 
            <CssBaseline />
            <header />
            <Grid container spacing={3} style={{ width: '100%'}}> 
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default Explore;