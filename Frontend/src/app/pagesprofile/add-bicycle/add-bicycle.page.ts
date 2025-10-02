import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BicycleService } from 'src/app/services/bicycle-service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.page.html',
  styleUrls: ['./add-bicycle.page.scss'],
  standalone: false

})
export class AddBicyclePage implements OnInit {

  bicycleForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private bicycleService: BicycleService,
    private route: Router,
    private alertController: AlertController
  ) {
    //BUILDER FOR MODEL BICYCLE ADD

    this.bicycleForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],

    })
  }

  ngOnInit() { }
  /** --------------------------------------------------------------------------------------
   * |                            ALERT ASYNC FOR AFTER TO ADD NEW BICYCLE                  | 
   *  --------------------------------------------------------------------------------------
   */
  async alertAdd() {
    const alert = await this.alertController.create({
      header: 'exito',
      message: 'Bicicleta añadida',
      buttons: ['OK']
    });

    await alert.present();

  }

  /** --------------------------------------------------------------------------------------
   * |                               CRUD FOR THE BICYCLES                                  | 
   *  --------------------------------------------------------------------------------------
   */

  //CREATE THE NEW BICYCLE

  createBicycle() {
    if (this.bicycleForm.valid) {
      console.log("formulario valido", this.bicycleForm.value);
      this.bicycleService.create(this.bicycleForm.value).subscribe(async response => {
        await this.alertAdd();
        this.route.navigateByUrl("tab-profile");
      })
    } else {
      console.log("formulario no valido");
    }
  }

  getFormControl(field: string) {
    return this.bicycleForm.get(field);
  }


}