import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class Validator {

  constructor() { }
  emailValid(control: FormControl){
    return new Promise(resolve => {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!emailPattern.test(control.value)){
        resolve({ InvalidEmail : true });
      }
      resolve(null);
      });
    }
    
    pwdValid(control: FormControl){
        return new Promise(resolve =>{
          const pattern = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;
          // one uppercase letter, one lowercase letter, a number and min length is 8  
          if (!pattern.test(control.value)) {
            resolve({ InvalidPwd : true });
          }
          resolve(null);
      });
    }
}
