import { createFeature, createReducer, on } from '@ngrx/store';
import { Department } from './department.model';
import { loadDepartments, loadDepartmentsFailure, loadDepartmentsSuccess } from './department.action';

export interface DepartmentState {
  departments: Department[];
  loading: boolean;
  error: string | null;
}

const initialDepartmentState: DepartmentState = {
  departments: [],
  loading: false,
  error: null
};

const reducer = createReducer(
  initialDepartmentState,
  on(loadDepartments, state => ({ ...state, loading: true })),
  on(loadDepartmentsSuccess, (state, { departments }) => ({
    ...state,
    departments,
    loading: false,
    error: null
  })),
  on(loadDepartmentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const departmentsFeature = createFeature({
  name: 'departments',
  reducer,
});

export const {
  name: departmentsFeatureKey,
  reducer: departmentReducer,
  selectDepartments,
  selectDepartmentsState,
  selectLoading,
  selectError
} = departmentsFeature;
