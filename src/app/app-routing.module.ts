import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
