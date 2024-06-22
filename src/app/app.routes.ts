import { Routes, Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PostsComponent } from './pages/posts/posts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'posts',
        component: PostsComponent,
      },
    ],
  },
];
