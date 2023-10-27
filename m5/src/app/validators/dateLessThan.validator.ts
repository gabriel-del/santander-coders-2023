import type {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'

export function dateLessThanValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.value)
    const [dd, mm, yyyy] = control.value.split('/')
    const inputDate = new Date(yyyy, mm, dd)
    const currentDate = new Date()
    if (inputDate < currentDate) return {dateLessThan: true}
    return null
  }
}
