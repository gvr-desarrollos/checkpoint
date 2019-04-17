import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    options: BarcodeScannerOptions;

    constructor(private barcodeScanner: BarcodeScanner,
                private router: Router) { }

    
    scanCode() {
        //Options
        this.options = {
            showTorchButton: true,
            showFlipCameraButton: true,
            formats : "QR_CODE",
            resultDisplayDuration: 100,
            prompt: "Escanee el codigoQR"
        }
        this.barcodeScanner.scan(this.options).then((barcodeData) => {
           if(barcodeData.text != ''){
            this.servicios(barcodeData.text);
           }
        }, (err) => {
            console.log(err);
        });
    }

    servicios(ubicacion: string) {
        console.log("UBICACION: "+ubicacion);
        if(ubicacion==null){
            ubicacion="ninguno";
        }
       this.router.navigate(['servicios',ubicacion]);
    }

}
