import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  error$ = new Subject<string>()

  handle(message:string) : void{
    this.error$.next(message)
  }

  clear(){
    this.error$.next('')
  }
}
// ng g s services/error --skip-tests
