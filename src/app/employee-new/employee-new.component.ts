import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee, EmployeeService } from '../service/employee.service';

@Component({
  selector: 'employee-new',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-new.component.html',
  styleUrl: './employee-new.component.css',
})
export class EmployeeNewComponent {
  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  };

  constructor(private employeeService: EmployeeService) {
    // setTimeout(() => {
    //   this.name = 'Maxwell';
    // }, 11000);
  }

  addEmployee(event: MouseEvent) {
    if (this.employee.salary >= 1000) {
      this.employee.bonus = 0;
    }

    // const copy = { ...this.employee };
    this.employeeService.employees.push({ ...this.employee });
    // console.log(this.employeeService.employees);
    // console.log(event);
  }
}
