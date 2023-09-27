import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { AppServiceService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formulario: FormGroup;
  result:any;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppServiceService
  ) {
    // Crear el formulario utilizando FormBuilder y establecer los valores iniciales como números
    this.formulario = this.formBuilder.group({
      person_age: [0],
      person_income: [0],
      person_emp_length: [0],
      loan_amnt: [0],
      loan_int_rate: [0],
      loan_percent_income: [0],
      cb_person_cred_hist_length: [0],
      person_home_ownership_num: [0],
      loan_intent_num: [0],
      loan_grade_num: [0],
      cb_person_default_on_file_num: [0],
    });
  }

  // Función para manejar la acción del botón "Calcular"
  calcular() {
    const formData = this.formulario.value;

    // Convertir todos los valores a números de punto flotante (float)
    const formDataArray: number[] = [
      parseFloat(formData.person_age),
      parseFloat(formData.person_income),
      parseFloat(formData.person_emp_length),
      parseFloat(formData.loan_amnt),
      parseFloat(formData.loan_int_rate),
      parseFloat(formData.loan_percent_income),
      parseFloat(formData.cb_person_cred_hist_length),
      parseFloat(formData.person_home_ownership_num),
      parseFloat(formData.loan_intent_num),
      parseFloat(formData.loan_grade_num),
      parseFloat(formData.cb_person_default_on_file_num),
    ];

    this.appService.calcule(formDataArray).subscribe((res) => {
      console.log(formDataArray);
      console.log(res);
      this.result = res;
    });
  }
}
