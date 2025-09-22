import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-capture',
    standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lead-capture.component.html',
  styleUrl: './lead-capture.component.css'
})
export class LeadCaptureComponent {

lead_capture!: FormGroup;
  isEditMode = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.lead_capture = this.fb.group({
      leadName: ['', Validators.required],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.min(0)]],
      phoneNumber: ['', Validators.required],
      product: ['', Validators.required],
      source: ['', Validators.required],
    });
  }

  // ✅ Save form
  savePlan() {
    if (this.lead_capture.valid) {
      this.isSubmitting = true;
      const formData: any = this.lead_capture.value;
      console.log('Form submitted:', formData);

      // 👉 Replace with API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.resetForm();
      }, 1000);
    } else {
      // Mark all fields as touched so validation errors display
      Object.keys(this.lead_capture.controls).forEach(key => {
        this.lead_capture.get(key)?.markAsTouched();
      });
    }
  }

  // ✅ Reset form
  resetForm() {
    this.lead_capture.reset();
    this.isEditMode = false;
  }

  // ✅ Cancel edit
  cancelEdit() {
    this.isEditMode = false;
    this.resetForm();
  }
}
