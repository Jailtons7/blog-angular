import { Routes, Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PostsComponent } from './pages/posts/posts.component';
import { authGuard } from './pages/login/login.authGuard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'posts',
        component: PostsComponent,
        canActivate: [authGuard],
      },
    ],
  },
];
