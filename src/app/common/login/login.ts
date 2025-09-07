import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
loginForm!: FormGroup;
constructor(private fb: FormBuilder,private store: Store) {
   
  }
   ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

    onSubmit(): void {
  
  }
    displayError(control: string): boolean {
    const field = this.loginForm.get(control);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getError(control: string): string {
    const field = this.loginForm.get(control);
    if (field?.errors?.['required']) return 'This field is required';
    return '';
  }


  
}
