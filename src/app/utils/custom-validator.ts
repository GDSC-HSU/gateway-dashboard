import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl, Form } from '@angular/forms';


export class CustomValidator {

    static mustMatch(password: FormControl, confirmPassword: FormControl): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {
            if (confirmPassword.errors && !confirmPassword.errors?.["mustMatch"]) {
                return { mustMatch: true };
            }
            // set error on matchingControl if validation fails
            if (password.value !== confirmPassword.value) {
                return { mustMatch: true };
            } else {
                return null;
            }
        }
    }
}