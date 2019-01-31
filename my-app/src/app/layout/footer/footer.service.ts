import { Injectable } from '@angular/core';
import { Footer } from './footer';
import { footerModule } from './mock-footer';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }
  getUrl(): Observable<Footer[]> {
    return of(footerModule);
  }
}
