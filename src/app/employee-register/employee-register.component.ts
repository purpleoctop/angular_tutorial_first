import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import {EmployeeregisterService} from '../employeeregister.service';
import { Router } from '@angular/router';


interface CrEmployee {
  name: string;
  salary: string;
  age: string;

}

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {
employee$;
employee = <CrEmployee>{};
employeeregisterForm;
  constructor(
    private formBuilder: FormBuilder,
    private employeeregisterService: EmployeeregisterService,
    private router: Router
  ) {
    this.employeeregisterForm = this.formBuilder.group({
name: [''],
salary: [''],
age: ['']

    });
   }

  ngOnInit() {
  }

  addEmp() {
    this.employee.name = this.name.value;
    this.employee.salary = this.salary.value;
    this.employee.age = this.age.value;
    this.employee$ = this.employeeregisterService.addEmployee(this.employee).subscribe(emp => this.router.navigate(['/employees']));

  }

  get name() {
    return this.employeeregisterForm.get('name') as FormControl;
  }

  get salary() {
    return this.employeeregisterForm.get('salary') as FormControl;
  }

  get age() {
    return this.employeeregisterForm.get('age') as FormControl;
  }

}
