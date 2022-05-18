import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'autofill-by-postalcode',
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
  },
  {
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
    path: 'kyc-address',
    loadChildren: () => import('./kyc-address/kyc-address.module').then( m => m.KycAddressPageModule)
  },
  {
    path: 'business-address',
    loadChildren: () => import('./business-address/business-address.module').then( m => m.BusinessAddressPageModule)
  },
  {
    path: 'user-address',
    loadChildren: () => import('./user-address/user-address.module').then( m => m.UserAddressPageModule)
  },
  {
    path: 'list-address',
    loadChildren: () => import('./list-address/list-address.module').then( m => m.ListAddressPageModule)
  },
  {
    path: 'user-address-type2',
    loadChildren: () => import('./user-address-type2/user-address-type2.module').then( m => m.UserAddressType2PageModule)
  },
  {
    path: 'list-template',
    loadChildren: () => import('./list-template/list-template.module').then( m => m.ListTemplatePageModule)
  },
  {
    path: 'form-input-template',
    loadChildren: () => import('./form-input-template/form-input-template.module').then( m => m.FormInputTemplatePageModule)
  },
  {
    path: 'condition-template',
    loadChildren: () => import('./condition-template/condition-template.module').then( m => m.ConditionTemplatePageModule)
  },
  {
    path: 'agreement-template',
    loadChildren: () => import('./agreement-template/agreement-template.module').then( m => m.AgreementTemplatePageModule)
  },
  {
    path: 'consent-info-user-template',
    loadChildren: () => import('./consent-info-user-template/consent-info-user-template.module').then( m => m.ConsentInfoUserTemplatePageModule)
  },
  {
    path: 'consent-info-manager-template',
    loadChildren: () => import('./consent-info-manager-template/consent-info-manager-template.module').then( m => m.ConsentInfoManagerTemplatePageModule)
  },
  {
    path: 'home-template',
    loadChildren: () => import('./home-template/home-template.module').then( m => m.HomeTemplatePageModule)
  },
  {
    path: 'autofill-by-tambol',
    loadChildren: () => import('./autofill-by-tambol/autofill-by-tambol.module').then( m => m.AutofillByTambolPageModule)
  },
  {
    path: 'autofill-by-postalcode',
    loadChildren: () => import('./autofill-by-postalcode/autofill-by-postalcode.module').then( m => m.AutofillByPostalcodePageModule)
  },
  {
    path: 'autofill-by-tambol-popover',
    loadChildren: () => import('./autofill-by-tambol-popover/autofill-by-tambol-popover.module').then( m => m.AutofillByTambolPopoverPageModule)
  },
  {
    path: 'autofill-by-postalcode-popover',
    loadChildren: () => import('./autofill-by-postalcode-popover/autofill-by-postalcode-popover.module').then( m => m.AutofillByPostalcodePopoverPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
