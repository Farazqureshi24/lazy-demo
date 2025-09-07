import { Component, inject } from '@angular/core';
import { Common } from '../common-service/common';    
import { catchError, combineLatest, concatMap, forkJoin, from, mergeMap, of, switchMap, zip } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
 constructor(private api: Common) {}

  ngOnInit() {}

    private store = inject(Store);
  

    // onLogout() { this.store.dispatch(AuthActions.logout()); }
   getApiCalls() {
    return [
      this.api.getProducts(),
      this.api.getEmployee(),
      this.api.getUsers(),
      this.api.getPosts(),
      this.api.getQuotes()
    ].map(obs=>obs.pipe(
     catchError(err => {
        console.error('❌ API Error:', err.message);
        return of('🔴 Fallback for failed API');
      })
    )
  )
  }

callWithMergeMap() {
  console.log('🌀 MergeMap started');
  from(this.getApiCalls())
    .pipe(mergeMap(api$ => api$))
    .subscribe({
      next: res => console.log('📦 MergeMap:', res),
      error: err => console.error('❌ MergeMap Error:', err)
    });
}


 callWithConcatMap() {
  console.log('📥 ConcatMap started');
  from(this.getApiCalls())
    .pipe(concatMap(api$ => api$))
    .subscribe({
      next: res => console.log('📦 ConcatMap:', res),
      error: err => console.error('❌ ConcatMap Error:', err)
    });
}


callWithSwitchMap() {
  console.log('🔄 SwitchMap started');
  from(this.getApiCalls())
    .pipe(switchMap(api$ => api$))
    .subscribe({
      next: res => console.log('📦 SwitchMap:', res),
      error: err => console.error('❌ SwitchMap Error:', err)
    });
}


callWithForkJoin() {
  console.log('🧵 ForkJoin started');
  forkJoin(this.getApiCalls())
    .subscribe({
      next: res => console.log('✅ ForkJoin ALL results:', res),
      error: err => console.error('❌ ForkJoin Error:', err)
    });
}


callWithCombineLatest() {
  console.log('🧵 CombineLatest started');
  combineLatest(this.getApiCalls())
    .subscribe({
      next: res => console.log('✅ CombineLatest results:', res),
      error: err => console.error('❌ CombineLatest Error:', err)
    });
}

callWithZip(){
    console.log('🧵 Zip started');
  zip(this.getApiCalls()).subscribe({
  next: (res) => console.log('✅ Zip:', res),
  error: (err) => console.error('❌ Zip Error:', err),
});

}



}

