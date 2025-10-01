import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
  standalone:false
})
export class TabProfilePage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }


  back(){
    this.route.navigateByUrl("tab")
  }
}
