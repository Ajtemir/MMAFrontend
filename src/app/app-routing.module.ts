import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductComponent} from "./components/product/product.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

const routes: Routes = [
  {path: '', component: ProductPageComponent},
  {path: 'about', component: AboutPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
