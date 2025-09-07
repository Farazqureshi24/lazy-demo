import { inject, Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { catchError,map,mergeMap,of } from "rxjs";
import { PostService } from "../../../common/common-service/posts-service";
import { loadDepartments, loadDepartmentsFailure, loadDepartmentsSuccess } from "./department.action";


@Injectable()
export class DepartmentEffects {
  private actions$ = inject(Actions);

  constructor(private postService: PostService) {}

  loadDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDepartments),
      mergeMap(() =>
        this.postService.getDepartments().pipe(
          map((departments) => {
            console.log("✅ API Response:", departments);
            return loadDepartmentsSuccess({ departments });
          }),
          catchError((err) =>
            of(loadDepartmentsFailure({ error: err.message || 'Failed to load departments' }))
          )
        )
      )
    )
  );
}
