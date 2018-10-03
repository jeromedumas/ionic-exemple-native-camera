import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public base64Image: string;

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) { }

  public getPicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // image encodée en base 64
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error('Echec de la prise de vue : ' + err);
    });
  }
}
