import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cart-edit-template',
    loadChildren: () => import('./cart-edit-template/cart-edit-template.module').then( m => m.CartEditTemplatePageModule)
  },
  {
    path: 'cart-checkout-template',
    loadChildren: () => import('./cart-checkout-template/cart-checkout-template.module').then( m => m.CartCheckoutTemplatePageModule)
  },
  {
    path: 'option-dialog-template',
    loadChildren: () => import('./option-dialog-template/option-dialog-template.module').then( m => m.OptionDialogTemplatePageModule)
  },
  {
    path: 'cart-dialog-template',
    loadChildren: () => import('./cart-dialog-template/cart-dialog-template.module').then( m => m.CartDialogTemplatePageModule)
  },
  {
    path: 'form-template',
    loadChildren: () => import('./form-template/form-template.module').then( m => m.FormTemplatePageModule)
  },
  {
    path: 'form-binding',
    loadChildren: () => import('./form-binding/form-binding.module').then( m => m.FormBindingPageModule)
  },  {
    path: 'form-send-data',
    loadChildren: () => import('./form-send-data/form-send-data.module').then( m => m.FormSendDataPageModule)
  },
  {
    path: 'form-receive-data',
    loadChildren: () => import('./form-receive-data/form-receive-data.module').then( m => m.FormReceiveDataPageModule)
  },
  {
    path: 'memory',
    loadChildren: () => import('./memory/memory.module').then( m => m.MemoryPageModule)
  },
  {
    path: 'autofill-by-tambol',
    loadChildren: () => import('./autofill-by-tambol/autofill-by-tambol.module').then( m => m.AutofillByTambolPageModule)
  },
  {
    path: 'autofill-by-postalcode',
    loadChildren: () => import('./autofill-by-postalcode/autofill-by-postalcode.module').then( m => m.AutofillByPostalcodePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
