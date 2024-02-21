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
}
