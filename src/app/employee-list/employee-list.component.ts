import { Component } from '@angular/core';
import employees from '../employess';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees = employees;

  getSalaryColor(employee: any) {
    if (employee.salary >= 8000) {
      return 'green';
    } else if (employee.salary < 1412) {
      return 'red';
    } else {
      return null;
    }
  }

  getSalaryColorClass(employee: any) {
    return {
      'salary-expensive': employee.salary >= 8000,
      'salary-cheap': employee.salary <= 1000,
    };
  }
}
