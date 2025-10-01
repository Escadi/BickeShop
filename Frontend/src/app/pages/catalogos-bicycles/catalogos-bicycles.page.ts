import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { Router } from '@angular/router';
import { BicycleService } from 'src/app/services/bicycle-service';

@Component({
  selector: 'app-catalogos-bicycles',
  templateUrl: './catalogos-bicycles.page.html',
  styleUrls: ['./catalogos-bicycles.page.scss'],
  standalone: false
})
export class CatalogosBicyclesPage implements OnInit {

  bicycles: any = [];


  constructor(
    private bicycleService: BicycleService,
    private router: Router
  ) { }


  ngOnInit() {
    this.getAllBicycles();
  }

  getAllBicycles(){
    this.bicycleService.getBicycles().subscribe(response => {
      this.bicycles = response;
    });
  }

   addBicycle() {
    this.router.navigateByUrl('add-bicycle');
  }
}
