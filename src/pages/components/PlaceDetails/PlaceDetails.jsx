import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ( {place} ) => {
    const classes = useStyles();

    
    return (
        <Card elevation={6}>
            <CardMedia 
                style = {{ height: 150 }}
                image = {place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title = {place.name}
            />
            <CardContent>
                <Typography 
                gutterBottom varaint="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly/>
                    <Typography gutterBottom variant="subtitle2"> Out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Price Range:</Typography>
                    <Typography gutterBottom variant="subtitle2">
                     {place.price_level}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Ranking:      </Typography>
                    <Typography gutterBottom variant="subtitle2">
                    {place.ranking}
                    </Typography>
                </Box>
                {place?.cuisine?.map(({ name }) => (
                <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place.address && (
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                    <LocationOnIcon />{place.address}
                </Typography>
                )}
                {place.phone && (
                <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                    <PhoneIcon /> {place.phone}
                </Typography>
                )}
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;