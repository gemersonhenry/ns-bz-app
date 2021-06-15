import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./business/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'ios-input-mask-demo',
    loadChildren: () => import('./business/ios-input-mask/ios-input-mask.module').then(m => m.IosInputMaskModule),
  },
  {
    path: '**',
    redirectTo: '/home',
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false,
    initialNavigation: 'disabled'
  })],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
