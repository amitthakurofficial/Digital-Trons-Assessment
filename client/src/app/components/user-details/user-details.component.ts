import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { ShedulesService } from 'src/app/services/shedules.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  requestBody;
  submitted = false;
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  slotId;
  userId;
  constructor(private userService:UserService , private route:Router , private sheduleService:ShedulesService , private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(res => {
      this.slotId = res['id']
      // this.userId = res['userId']
      console.log(this.slotId)
      // console.log(this.userId)
    })
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted =true;
    if(this.userForm.invalid) {
      return ;
    }
    this.requestBody = {
      firstName : this.userForm.value.firstName,
      lastName  : this.userForm.value.lastName,
      mobileNumber : this.userForm.value.mobileNumber
    }
    this.bookSlot();
    console.log(this.userForm.value)
  }

  bookSlot() {
    this.userService.addUser(this.requestBody).subscribe(res => {
      if(res) {
        let requestBody = {
          _id : this.slotId,
          userId : res._id
        }
        this.sheduleService.updateSlot(requestBody).subscribe(res => {

        })
      }

    })
  }

  cancel() {
    this.route.navigate(['slots']);
  }
}
