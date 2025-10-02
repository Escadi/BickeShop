import { Component, OnInit } from '@angular/core';
import { BicycleService } from 'src/app/services/bicycle-service';

@Component({
  selector: 'app-upload-bicycle',
  templateUrl: './upload-bicycle.page.html',
  styleUrls: ['./upload-bicycle.page.scss'],
  standalone: false
})
export class UploadBicyclePage implements OnInit {
  bicycle: any =[];

  constructor(
    private bicycleService: BicycleService
  ) { }

  ngOnInit() {
    this.getAllBicycles()
  }
  getAllBicycles(){
    this.bicycleService.getBicycles().subscribe(response =>{
      this.bicycle = response
    });
  }

}
