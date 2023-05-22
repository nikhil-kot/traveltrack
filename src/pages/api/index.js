import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
  

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,  
            //bl_latitude: '39.9692700198724',
            //tr_latitude: '39.9330816099569',
            //bl_longitude: '-75.15663052681276',
            //tr_longitude: '-75.21851445320436',

          
          },
          headers: {
            'X-RapidAPI-Key': 'c73dcd536cmshcb80f98a1295920p19188fjsnfbdd88154d44',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          },
        });
        return data;
    } catch (error){
        console.log(error);

    }
}
  