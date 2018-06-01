import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';

import { AuthGuard } from './services/auth.guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'knowledge',
    component: KnowledgeComponent,
  },
  {
    path: '**',
    redirectTo: 'HomeComponent',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only //this thing sucks
    ),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
