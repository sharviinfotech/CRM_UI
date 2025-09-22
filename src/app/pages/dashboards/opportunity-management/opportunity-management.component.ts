import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-opportunity-management',
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './opportunity-management.component.html',
  styleUrl: './opportunity-management.component.css'
})
export class OpportunityManagementComponent {

 opportunity_management!: FormGroup;
  isEditMode = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.opportunity_management = this.fb.group({
      opportunityName: ['', Validators.required],
      lead: ['', Validators.required],
      serviceInterest: ['', [Validators.required, Validators.email]],
      quoteInformation: ['', Validators.required],
     stage: ['', Validators.required],

    });
  }

  // ✅ Save form
  savePlan() {
    if (this.opportunity_management.valid) {
      this.isSubmitting = true;
      const formData: any = this.opportunity_management.value;
      console.log('Form submitted:', formData);

      // 👉 Replace with API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.resetForm();
      }, 1000);
    } else {
      // Mark all fields as touched so validation errors display
      Object.keys(this.opportunity_management.controls).forEach(key => {
        this.opportunity_management.get(key)?.markAsTouched();
      });
    }
  }

  // ✅ Reset form
  resetForm() {
    this.opportunity_management.reset();
    this.isEditMode = false;
  }

  // ✅ Cancel edit
  cancelEdit() {
    this.isEditMode = false;
    this.resetForm();
  }
}
