import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { NotaPage } from '../nota.page';
import { NotaService } from '../../../services/nota.service';
import { Nota } from '../../../models/nota';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() data: any;

  constructor(private modalCtrl: ModalController, private nota_service: NotaService, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

  addNota(form: NgForm){
    if(form.valid){
      if(form.value._id){
        this.nota_service.putNota(form.value)
        .subscribe(res => {
          this.getNotas();
          this.resetForm(form);
          this.close();
          this.editarToastr()
        })
      } else {
        this.nota_service.postNota(form.value)
        .subscribe(res => {
          this.getNotas();
          this.close();
          this.resetForm(form);
          this.guardarToastr()
        })
      }
    } else {
      console.log('Introduzca los campos requeridos.')
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.nota_service.selectedNota._id = ''
      this.nota_service.selectedNota.nombre_nota = null
      this.nota_service.selectedNota.descripcion = null
    }
  }

  getNotas(){
    this.nota_service.getNotas()
    .subscribe(res => {
      this.nota_service.notas = res as Nota[]
    })
  }

  async guardarToastr(){
    const toast = await this.toastCtrl.create({
      message: 'Nota guardada.',
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

  async editarToastr(){
    const toast = await this.toastCtrl.create({
      message: 'Nota actualizada.',
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

}
