import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any = null;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.auth.getCurrentUser()?.subscribe({
      next: (res) => (this.user = res),
      error: () => {
        this.auth.logout();
        this.router.navigate(['/login']);
      },
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
