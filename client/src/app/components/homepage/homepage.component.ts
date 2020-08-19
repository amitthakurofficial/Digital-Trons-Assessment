import { Component, OnInit } from '@angular/core';
import { ShedulesService } from 'src/app/services/shedules.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  slots ;
  constructor(private shedulesService : ShedulesService,
              private route: Router,
              private userService:UserService) { }

  ngOnInit() {
    this.getSlots();
  }

  getSlots() {
    this.shedulesService.getAllSlotes().subscribe(res => {
      this.slots = res;
      console.log(res);
    })
  }
  details(id) {
    this.route.navigate(['/slots',id])
    console.log(id);
  }
update(userId) {
  this.route.navigate(['/user',userId])
    // console.log(id);
}

}
