import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', component: UserProfileComponent }]),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [UserProfileComponent],
  declarations: [UserProfileComponent]
})
export class UserProfileModule {}
