import { Component, OnInit } from '@angular/core';
import { BicycleService } from 'src/app/services/bicycle-service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.page.html',
  styleUrls: ['./manage-inventory.page.scss'],
  standalone: false
})
export class ManageInventoryPage implements OnInit {
    bicycle: any = [];

    
  constructor(
    private bicycleService: BicycleService,
    private alertController: AlertController
  ) { }



  ngOnInit() {
    this.getAllBicycles();
  }

  getAllBicycles(){
    this.bicycleService.getBicycles().subscribe(response => {
      this.bicycle = response
    });
  }


  deleteBicycle(id: any){
    this.bicycleService.delete(id).subscribe(response => {
      this.getAllBicycles();
    })
  }

}
