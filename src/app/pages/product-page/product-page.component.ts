import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  title = 'Angular app'
  // products: IProduct[] = []
  loading: boolean = false
  // products$: Observable<IProduct[]>
  term = ''
  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productService.getAll().subscribe(products => {
      this.loading = false
    })
  }


}
