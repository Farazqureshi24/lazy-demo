import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { PostFormDialog } from '../post-form-dialog/post-form-dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from "@angular/material/card";
import { AsyncPipe, CommonModule } from '@angular/common';
import { PostService } from '../common-service/posts-service';;

import { MatChip ,MatChipListbox} from '@angular/material/chips';
import { loadDepartments } from '../../auth/store/department/department.action';
import { selectDepartments, selectLoading } from '../../auth/store/department/department.reducer';

// import { MatChipListbox } from "@angular/material/chips";

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, AsyncPipe, MatToolbar, MatChip, MatIconModule, MatProgressBarModule, MatCardModule, MatPaginatorModule, MatTableModule, MatChipListbox],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostList {



  constructor( private dialog: MatDialog,private postService:PostService) {
 
  }
   

 private store = inject(Store);

 departments$ = this.store.select(selectDepartments);
 loading$ = this.store.select(selectLoading);

  ngOnInit(): void {
this.departments$.subscribe(data => {
  console.log('🔥 Departments from Store:', data);
});
    this.store.dispatch(loadDepartments())
  }

  








}
