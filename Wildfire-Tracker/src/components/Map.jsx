import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import PropTypes from 'prop-types';

const Map = ({eventData , center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null);

   const markers = eventData.map((ev , index) => {
    if (ev.categories[0].id === 8) {
    return (
        <LocationMarker 
            key={index} 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}  
            onClick={() => { setLocationInfo({ id: ev.id, title: ev.title })}}
        />
    );
}
return null;
});

  return (
    <div className='map'>
        <GoogleMapReact 
        bootstrapURLKeys={{ key : 'AIzaSyBMAIHwiKQx9dqY5kGtxZvVjhR8lASiHqE'}}
        defaultCenter={center}
        defaultZoom={zoom}
        >
            {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} /> }
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 17.4065,
        lng: 78.4772
    },
    zoom: 6
}

Map.propTypes = {
    eventData: PropTypes.array.isRequired,
    center: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
  };

export default Map;