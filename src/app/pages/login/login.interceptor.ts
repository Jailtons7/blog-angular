import { inject } from '@angular/core';
import { Location } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';

export const TokenInterceptable: HttpInterceptorFn = (req, next) => {
  debugger;
  const router = inject(Router);
  const is_login_page = router.url === '/login';
  const token: string | null = localStorage.getItem('token');
  if (!token && !is_login_page) {
    router.navigateByUrl('/login');
  }
  req = req.clone({
    headers: req.headers.set('Authorization', 'token ' + token),
  });
  return next(req);
};
