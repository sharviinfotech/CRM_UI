import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-assignment',
     standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lead-assignment.component.html',
  styleUrl: './lead-assignment.component.css'
})
export class LeadAssignmentComponent {
 lead_assignment!: FormGroup;
  isEditMode = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.lead_assignment = this.fb.group({
   salesRepresentativeAssignment: ['', Validators.required],
      assignmentCriteria: ['', Validators.required],
     
    });
  }

  // ✅ Save form
  savePlan() {
    if (this.lead_assignment.valid) {
      this.isSubmitting = true;
      const formData: any = this.lead_assignment.value;
      console.log('Form submitted:', formData);

      // 👉 Replace with API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.resetForm();
      }, 1000);
    } else {
      // Mark all fields as touched so validation errors display
      Object.keys(this.lead_assignment.controls).forEach(key => {
        this.lead_assignment.get(key)?.markAsTouched();
      });
    }
  }

  // ✅ Reset form
  resetForm() {
    this.lead_assignment.reset();
    this.isEditMode = false;
  }

  // ✅ Cancel edit
  cancelEdit() {
    this.isEditMode = false;
    this.resetForm();
  }
}
