import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                reject(new Error('User denied the request for Geolocation.'));
                break;
              case error.POSITION_UNAVAILABLE:
                reject(new Error('Location information is unavailable.'));
                break;
              case error.TIMEOUT:
                reject(new Error('The request to get user location timed out.'));
                break;
              default:
                reject(new Error('An unknown error occurred.'));
            }
          },
          { timeout: 10000 } // Set a timeout of 10 seconds
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }
}
