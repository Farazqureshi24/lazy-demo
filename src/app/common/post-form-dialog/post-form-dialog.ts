import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MatInputModule } from "@angular/material/input";


@Component({
  selector: 'app-post-form-dialog',
  imports: [MatDialogModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './post-form-dialog.html',
  styleUrl: './post-form-dialog.scss'
})
export class PostFormDialog {


  constructor(
    private fb: FormBuilder,
    private store: Store,
    private ref: MatDialogRef<PostFormDialog>,

  ) {
   
  }

  ngOnInit(): void {
   
  }


 save() {
  

}
}