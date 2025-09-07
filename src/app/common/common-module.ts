import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing-module';
import { Home } from './home/home';
import { Login } from './login/login';
import { PostList } from './post-list/post-list';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from "@angular/material/chips";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [], // No declarations for standalone components
  imports: [
    CommonModule,
    CommonRoutingModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatTableModule, MatPaginatorModule,MatChipsModule,
    MatProgressBarModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatInputModule, MatDialogModule,
    MatSnackBarModule, MatCardModule, MatSelectModule, ReactiveFormsModule,FormsModule
  ]
})
export class CommonFeatureModule { }
