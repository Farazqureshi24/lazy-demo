import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Department } from '../../auth/store/department/department.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {
     private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}
getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/EmployeeApp/GetDepartments`).pipe(
        tap((response) => console.log('Departments fetched:', response)),
        map(response => response) // Adjust based on actual response structure
    );  
  }

} 
