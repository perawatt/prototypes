import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'list-address',
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
  },  {
    path: 'user-address-type2',
    loadChildren: () => import('./user-address-type2/user-address-type2.module').then( m => m.UserAddressType2PageModule)
  },
  {
    path: 'user-address-type3',
    loadChildren: () => import('./user-address-type3/user-address-type3.module').then( m => m.UserAddressType3PageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'create-phone',
    loadChildren: () => import('./create-phone/create-phone.module').then( m => m.CreatePhonePageModule)
  },
  {
    path: 'add-phone',
    loadChildren: () => import('./add-phone/add-phone.module').then( m => m.AddPhonePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
