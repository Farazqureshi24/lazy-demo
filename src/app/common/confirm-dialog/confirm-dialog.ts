import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.scss'
})
export class ConfirmDialog {
 constructor(
    public ref: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { title?: string; message?: string }
  ) {}
}
