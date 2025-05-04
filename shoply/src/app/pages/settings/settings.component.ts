import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-settings',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      fullName: [''],
      email: ['', [Validators.required, Validators.email]],
      newPassword: [''],
      confirmPassword: [''],
      notifications: [true],
    });
  }

  onSave() {
    if (this.settingsForm.value.newPassword !== this.settingsForm.value.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Settings saved:', this.settingsForm.value);
    // Replace with API call to save settings
  }

}
