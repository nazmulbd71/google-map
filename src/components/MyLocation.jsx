import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 23.814431269412147,
    lng: 88.74823534704916
};

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_APIKEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker
                    position={center}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)