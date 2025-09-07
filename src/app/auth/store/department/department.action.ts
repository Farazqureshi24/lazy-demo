import { createAction, props } from '@ngrx/store';
import { Department } from './department.model';

export const loadDepartments = createAction('[Department] Load Departments');

export const loadDepartmentsSuccess = createAction(
  '[Department API] Load Departments Success',
  props<{ departments: Department[] }>()
);

export const loadDepartmentsFailure = createAction(
  '[Department API] Load Departments Failure',
  props<{ error: string }>()
);
