import { Component } from '@angular/core';
import { LocationService } from 'src/core/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

  constructor(private locationService: LocationService) {}

  fetchLocation() {
    this.locationService.getCurrentLocation()
      .then((position) => {
        console.log('position', position);
        // this.latitude = position.coords.latitude;
        // this.longitude = position.coords.longitude;
        this.error = null;
      })
      .catch((err) => {
        this.latitude = null;
        this.longitude = null;
        this.error = err.message;
      });
  }
}
