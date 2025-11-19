import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/profile']),
      error: () =>
        (this.error =
          'Fehler bei der Anmeldung: Sie haben einen falschen Benutzernamen oder ein falsches Passwort eingegeben.'),
    });
  }
}
