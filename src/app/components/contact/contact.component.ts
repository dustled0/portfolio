import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RESUME_DATA } from '../../data/resume-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  personalInfo = RESUME_DATA.personalInfo;
  currentYear = new Date().getFullYear();

  contactForm: FormGroup;
  formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  errorMessage = '';

  // Replace with your Formspree endpoint URL
  private formspreeEndpoint = 'https://formspree.io/f/xbdonrwv';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.formStatus = 'submitting';
    this.errorMessage = '';

    try {
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.contactForm.value)
      });

      if (response.ok) {
        this.formStatus = 'success';
        this.contactForm.reset();
      } else {
        const data = await response.json();
        this.formStatus = 'error';
        this.errorMessage = data.error || 'Something went wrong. Please try again.';
      }
    } catch {
      this.formStatus = 'error';
      this.errorMessage = 'Network error. Please check your connection and try again.';
    }
  }

  resetForm(): void {
    this.formStatus = 'idle';
    this.errorMessage = '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors || !field.touched) return '';

    if (field.errors['required']) return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    if (field.errors['email']) return 'Please enter a valid email address';
    if (field.errors['minlength']) {
      const minLength = field.errors['minlength'].requiredLength;
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${minLength} characters`;
    }
    return '';
  }
}
