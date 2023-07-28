import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.el.nativeElement.focus()

  }

  constructor(private el: ElementRef) {
  }

}
