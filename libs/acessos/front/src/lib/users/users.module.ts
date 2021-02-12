import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { UsersComponent } from './users.component';
import { UsersQueryComponent } from './users-query/users-query.component';
import { UsersSearchComponent } from './users-search/users-search.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
  { path: '',
    component: UsersComponent,
    children: [
      {
        path: 'cadastro',
        component: UsersEditComponent
      }
    ]
  }
];

@NgModule({
  declarations: [UsersComponent, UsersQueryComponent, UsersSearchComponent, UsersEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [UsersQueryComponent, UsersSearchComponent, UsersEditComponent]
})
export class UsersModule { }
