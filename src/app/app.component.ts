import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Observable, exhaustMap, fromEvent, mergeMap, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-base-project';
  hiep;
  dau;
  @ViewChild('customBtn', { static: true }) btn: ElementRef;
  hostUrl = 'https://64911dd82f2c7ee6c2c7beb6.mockapi.io/api/v1/';
  $click: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('button ne', this.btn);
    this.$click = fromEvent(this.btn.nativeElement, 'click');
    this.$click.pipe(
      tap(ele => console.log("clickkkkkkkkkkk")),
      exhaustMap(ele =>{
        return this.getUser();
      })
    ).subscribe({complete: ()=> console.log('complete observable')})
  }

  getData() {}

  getUser() {
    const url = this.hostUrl + 'users';
    return this.http.get(url).pipe(
      tap((ele) => {
        console.log('tap in getUser', ele);
      })
    );
  }
}
