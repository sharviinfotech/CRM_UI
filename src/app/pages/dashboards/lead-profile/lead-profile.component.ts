import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lead-profile.component.html',
  styleUrl: './lead-profile.component.css'
})
export class LeadProfileComponent {

  lead_profile!: FormGroup;
  isEditMode = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.lead_profile = this.fb.group({
      leadName: ['', Validators.required],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      interactionHistory: ['', Validators.required],
      notes: ['']
    });
  }

  // ✅ Save form
  saveProfile() {
    if (this.lead_profile.valid) {
      this.isSubmitting = true;
      const formData: any = this.lead_profile.value;
      console.log('Lead Profile submitted:', formData);

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.resetForm();
      }, 1000);
    } else {
      Object.keys(this.lead_profile.controls).forEach(key => {
        this.lead_profile.get(key)?.markAsTouched();
      });
    }
  }

  // ✅ Reset form
  resetForm() {
    this.lead_profile.reset();
    this.isEditMode = false;
  }

  // ✅ Cancel edit
  cancelEdit() {
    this.isEditMode = false;
    this.resetForm();
  }
}
