import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth';
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<any>(`${this.apiUrl}/login`, {
        username,
        password,
        expiresInMins: 30,
      })
      .pipe(
        tap((res) => {
          if (res.accessToken && res.refreshToken) {
            localStorage.setItem(this.accessTokenKey, res.accessToken);
            localStorage.setItem(this.refreshTokenKey, res.refreshToken);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  getCurrentUser() {
    const token = this.getAccessToken();
    if (!token) return null;
    return this.http.get<any>(`${this.apiUrl}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  refreshToken() {
    const refreshToken = localStorage.getItem(this.refreshTokenKey);
    return this.http
      .post<any>(`${this.apiUrl}/refresh`, { refreshToken, expiresInMins: 30 })
      .pipe(
        tap((res) => {
          if (res.accessToken)
            localStorage.setItem(this.accessTokenKey, res.accessToken);
        })
      );
  }
}
