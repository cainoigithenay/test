import { Component, EventEmitter, Output } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { LocationService } from 'src/core/services/location.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css'],
})
export class QrScannerComponent {
  scanner: BrowserMultiFormatReader;
  @Output() scannedResult = new EventEmitter<{ qrData: string, location: any }>();
  isScanning = false;

  constructor(private locationService: LocationService) {
    this.scanner = new BrowserMultiFormatReader();
  }

  async startScanner() {
    try {
      this.isScanning = true;
      const videoInputDevices = await navigator.mediaDevices.enumerateDevices();
      if (videoInputDevices.length === 0) {
        alert('No camera devices found.');
        this.isScanning = false;
        return;
      }
      const selectedDeviceId = videoInputDevices[0].deviceId;

      this.scanner.decodeFromVideoDevice(selectedDeviceId, 'video', async (result, error) => {
        if (result) {
          const location = await this.locationService.getCurrentLocation();
          this.scannedResult.emit({ qrData: result.getText(), location });
          this.stopScanner();
        }
        if (error) {
          console.error('Scanning error:', error);
        }
      });
    } catch (error) {
      console.error('Error starting scanner:', error);
      alert('Failed to access camera.');
      this.isScanning = false;
    }
  }

  stopScanner() {
    // this.scanner.reset();
    this.isScanning = false;
  }
}
