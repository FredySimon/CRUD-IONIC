import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotaPage } from './nota.page';
import { ModalPage } from './modal/modal.page';
import { ModalPageModule } from './modal/modal.module';
import { ObtenerPage } from './obtener/obtener.page';
import { ObtenerPageModule } from './obtener/obtener.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: NotaPage
  },
];

@NgModule({
  entryComponents: [
    ModalPage,
    ObtenerPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalPageModule,
    ObtenerPageModule,
    PipesModule,
  ],
  declarations: [NotaPage]
})
export class NotaPageModule {}
