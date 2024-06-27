import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
    this.router = router;
  }

  onLogin() {
    const form = new FormData();
    form.append('username', this.loginObj.username);
    form.append('password', this.loginObj.password);
    this.http.post('http://0.0.0.0:8000/auth/access-token', form).subscribe({
      next: (res: any) => {
        // set token to local storage and then navigate to the posts
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('token_expires', res.token_expires);
        this.router.navigateByUrl('/posts');
      },
      error: (err: any) => {
        alert(err.error.detail);
      },
    });
  }
}

export class Login {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
}
