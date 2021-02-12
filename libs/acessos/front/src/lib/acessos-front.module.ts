import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcessosFrontComponent } from './acessos-front.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '',
       component: AcessosFrontComponent,
       children:[
         { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
       ]
      },
    ]),
  ],
  declarations: [AcessosFrontComponent],
  exports: [AcessosFrontComponent],
})
export class AcessosFrontModule {}
