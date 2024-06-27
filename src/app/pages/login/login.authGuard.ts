import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const http = inject(HttpClient);
  http
    .post(
      'http://localhost:8000/auth/verify-token',
      { token: token },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .subscribe({
      next: (resp: any) => {
        if (!resp.valid) {
          router.navigate(['/login']);
          return false;
        }
        return true;
      },
      error: (err: any) => {
        alert('Erro na validação do token!');
        router.navigate(['/login']);
        return false;
      },
    });

  return true;
};
