import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-location',
  templateUrl: './qr-location.component.html',
  styleUrls: ['./qr-location.component.css'],
})
export class QrLocationComponent {
  scannedData: string | null = null;
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

  onQrScanned(data: { qrData: string, location: any }) {
    this.scannedData = data.qrData;
    if (data.location) {
      this.latitude = data.location.latitude;
      this.longitude = data.location.longitude;
      this.error = null;
    } else {
      this.error = 'Location not available.';
      this.latitude = null;
      this.longitude = null;
    }
  }
}
