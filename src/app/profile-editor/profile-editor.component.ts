import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from "@angular/forms";


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  // generating form controls using form controls
ProfileForm =this.fb.group({
    firstName : ['', Validators.required],
    lastName : [''],
    Address: this.fb.group({
      street : [''],
      city : [''],
      state : [''],
      zip : [''],

    })
   
  });
  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
  }
onSubmit()
{
  console.warn(this.ProfileForm.value);
}
UpdateProfile(){
  this.ProfileForm.patchValue({
    firstName: 'pallavi',
    lastName: 'bande',
    Address:{
      street: '123 narendra nagar',
      city: 'nagpur',
      state: 'MH',
      zip : '440015'
    }
  });

}
}
