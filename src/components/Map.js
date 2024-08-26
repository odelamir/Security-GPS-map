import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './componentStyle.css';

const Map = () => {
    const [, setPoints] = useState([]);
    const [map, setMap] = useState(null);
    const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://localhost:5000/map')
                .then(response => {
                    const newPoint = response.data.points_now;
                    if(newPoint.x+newPoint.z!==0){
                    setPoints(prevPoints => [...prevPoints, newPoint]);
                    
                    if (map) {
                        const newLocation = calculateNewLocation(currentLocation, newPoint.x, newPoint.z);
                        console.log(`points.x: ${newPoint.x}`); // Print points.x to console
                        console.log(`points.y: ${newPoint.y}`);
                        new window.google.maps.Marker({
                            position: newLocation,
                            map: map,
                            title: `threat level: ${newPoint.y}\ntime threat: ${newPoint.current_time} `
                        });
                    }}}
                )
                //time threat: ${newPoint.current_time}

                .catch(error => {
                    console.error(`Error fetching data: ${error}`);
                });
        }, 10000); // 10000 milliseconds = 10 seconds

        return () => clearInterval(interval);
    }, [map, currentLocation]);

    useEffect(() => {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyDfJ4KrjD_b0b5wKUMKZFTQU6Erac6Hq10&callback=initMap`, () => {
            initMap();
        });
    }, []);

    function initMap() {
        navigator.geolocation.getCurrentPosition(function (position) {
            const initialLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            setCurrentLocation(initialLocation);

            const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
                center: initialLocation,
                zoom: 18
            });
            setMap(mapInstance);

            const yellowIcon = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
            
            new window.google.maps.Marker({
                position: initialLocation,
                map: mapInstance,
                title: 'Current Location',
                icon: yellowIcon
            });
            
        });
    }

    function calculateNewLocation(startLocation, xDistance, yDistance) {
        const earthRadius = 6378137; // רדיוס כדור הארץ במטרים
//ממירים למיקום של מפות כדורארץ
        const deltaLat = yDistance / earthRadius;
        const deltaLng = xDistance / (earthRadius * Math.cos(Math.PI * startLocation.lat / 180));

        const newLat = startLocation.lat + (deltaLat * 180 / Math.PI);
        const newLng = startLocation.lng + (deltaLng * 180 / Math.PI);

        return {
            lat: newLat,
            lng: newLng
        };
    }

    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.src = url;
        script.onload = callback;
        script.onerror = () => {
            console.error(`Error loading script: ${url}`);
        };
        document.body.appendChild(script);
    }

    return (
        <>
            
            <h2>Check for threats in your area</h2>
           
            
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
        </>
    );
};

export default Map;
