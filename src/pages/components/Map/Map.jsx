import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
import googleMapReact from 'google-map-react';



const Map = ( {setCoordinates, setBounds, coordinates, places}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(mi-width:600px)');
    //console.out(places);

    //const coordinates={ lat: 0, lng: 0};
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{ key: 'AIzaSyCWEH-jjevbUj3m1eBine6RSwDwK8JADjM'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    console.log(e.marginBounds.ne, e.marginBounds.sw);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                    
                  }}
                onChildClick={''}
            >
                {places?.map((place, i) => (
                    <div
                
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name ? place.name : 'restaurant'}

                                    />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;