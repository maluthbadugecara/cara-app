import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validator } from '../../provider/validator-helper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //constructor() {}

 form: FormGroup;

 constructor(private fb: FormBuilder, private val: Validator) {
   this.form = this.fb.group({
     pwd: ['', Validators.required, this.val.pwdValid],
     email: ['', Validators.required, this.val.emailValid]
   });

   const email = this.form.controls.email;
   email.valueChanges.subscribe((value: string) => {
     console.log(`Entered name is ${value}`);
   });
 }

 saveDetails(value) {
   console.dir(value);
 }

}
