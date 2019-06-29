import { Component, OnInit } from '@angular/core';

import { Nota } from '../../models/nota';
import { NotaService } from '../../services/nota.service';
import { ModalPage } from './modal/modal.page';
import { ObtenerPage } from './obtener/obtener.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {

  nombre_nota_detalle: string = ""
  descripcion_detalle: string = ""

  constructor(private nota_service: NotaService, public modalCtrl: ModalController, public alertController: AlertController, private toastCtrl: ToastController ) { }

  private notas: Nota[];
  filtro_nota = ''

  ngOnInit() {
    this.getNotas();
  }

  async deleteNota(_id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Quieres eliminar la nota?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
         handler: () => {
            console.log('Confirm Okay');
            this.nota_service.deleteNota(_id)
            .subscribe(res => {
                this.ngOnInit()})
            this.eliminarToastr()
          }
        }
      ]
    });
    await alert.present();  
  }

  async eliminarToastr(){
    const toast = await this.toastCtrl.create({
      message: 'Nota eliminada.',
      animated:true,
      showCloseButton: true,
      closeButtonText: 'X', 
      position: 'bottom',
      cssClass: 'toasteliminar',
      mode: "ios",
      translucent: true,
    })
    toast.present();
    toast.onDidDismiss().then((val) => {
      console.log('cerrar')
    })
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })
    await modal.present();
  }

  async obtenerNota(nota: Nota) {
    const modal = await this.modalCtrl.create({
      component: ObtenerPage,
      cssClass: 'ajustes',
      componentProps:{
        data1: nota.nombre_nota,
        data2: nota.descripcion
      }
    })
    await modal.present()
    this.nota_service.getNota(nota)
    .subscribe(res => {})
  }

  getNotas() {
    this.nota_service.getNotas()
      .subscribe(res => {
        this.nota_service.notas = res as Nota[]
        this.obtenerToatr()
      })
  }

  async obtenerToatr(){
    const toast = await this.toastCtrl.create({
      message: 'Notas obtenidas.',
      animated:true,
      showCloseButton: true,
      closeButtonText: 'X', 
      position: 'bottom',
      cssClass: 'toasteliminar',
      mode: "ios",
      translucent: true,
    })
    toast.present();
    toast.onDidDismiss().then((val) => {
      console.log('cerrar')
    })
  }

  editNota(nota: Nota) {
    this.nota_service.selectedNota = nota
    this.abrirModal()
  }

  buscar (event){
    this.filtro_nota = event.detail.value;
  }

}
