import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import employees from '../employess';

@Component({
  selector: 'employee-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-new.component.html',
  styleUrl: './employee-new.component.css',
})
export class EmployeeNewComponent {
  name = '';
  salary = 0;
  employees = employees;

  constructor() {
    setTimeout(() => {
      this.name = 'Maxwell';
    }, 11000);
  }

  addEmployee(event: MouseEvent) {
    console.log(event);
    this.employees.push({ name: this.name, salary: this.salary });
    console.log(this.employees);
  }
}
