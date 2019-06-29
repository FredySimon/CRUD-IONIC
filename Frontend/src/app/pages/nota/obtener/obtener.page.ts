import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { NotaPage } from '../nota.page';
import { NotaService } from '../../../services/nota.service';
import { Nota } from '../../../models/nota';

@Component({
  selector: 'app-obtener',
  templateUrl: './obtener.page.html',
  styleUrls: ['./obtener.page.scss'],
})
export class ObtenerPage implements OnInit {

  @Input() data: any;

  constructor(private modalCtrl: ModalController, private nota_service: NotaService,) { }

  ngOnInit() {
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}
