import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  submitted = false;
  requestBody;
  userId;
  userDetails;
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  constructor(private routes:ActivatedRoute ,private userService:UserService) { }

  ngOnInit() {
    this.routes.params.subscribe(res => {
      this.userId = res['id']
      // this.userId = res['userId']
      console.log(this.userId)
      // console.log(this.userId)
    })
    this.getUserdetails(this.userId);
  }

  
  get f() { return this.userForm.controls; }


  getUserdetails(userId) {
    this.userService.getUser(userId).subscribe(res => {
      this.userDetails = res;
      this.userForm.controls.firstName.setValue(this.userDetails[0].firstName);
      this.userForm.controls.lastName.setValue(this.userDetails[0].lastName);
      this.userForm.controls.mobileNumber.setValue(this.userDetails[0].mobileNumber);

    })
  }
  onSubmit() {
    this.submitted =true;
    if(this.userForm.invalid) {
      return ;
    }
    this.userDetails[0].firstName = this.userForm.value.firstName;
    this.userDetails[0].lastName = this.userForm.value.lastName
    this.userDetails[0].mobileNumber = this.userForm.value.mobileNumber
    this.userService.updateUser(this.userDetails).subscribe(res => {
      
    })
  }


}
