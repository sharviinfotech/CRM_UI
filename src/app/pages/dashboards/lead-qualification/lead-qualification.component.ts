import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-qualification',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lead-qualification.component.html',
  styleUrl: './lead-qualification.component.css'
})
export class LeadQualificationComponent {

  lead_qualification!: FormGroup;
  isEditMode = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.lead_qualification = this.fb.group({
      leadScore: ['', [Validators.required, Validators.min(0)]],
      qualificationStatus: ['', Validators.required],
      budget: ['', Validators.required],
      authority: ['', Validators.required],
      need: ['', Validators.required],
      timeline: ['', Validators.required],
    });
  }

  // ✅ Save form
  savePlan() {
    if (this.lead_qualification.valid) {
      this.isSubmitting = true;
      const formData: any = this.lead_qualification.value;
      console.log('Lead Qualification submitted:', formData);

      // 👉 Replace with API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.resetForm();
      }, 1000);
    } else {
      Object.keys(this.lead_qualification.controls).forEach(key => {
        this.lead_qualification.get(key)?.markAsTouched();
      });
    }
  }

  // ✅ Reset form
  resetForm() {
    this.lead_qualification.reset();
    this.isEditMode = false;
  }

  // ✅ Cancel edit
  cancelEdit() {
    this.isEditMode = false;
    this.resetForm();
  }
}
