import { UpdateClientePage } from './../update-cliente/update-cliente.page';
import { Cliente } from './../model/Cliente';
import { DBService } from './../services/db.services';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.page.html',
  styleUrls: ['./lista-de-clientes.page.scss'],
})
export class ListaDeClientesPage implements OnInit {


  listaDeClientes : Cliente[];
  loading : boolean;

  constructor(public modalController: ModalController, public toastController: ToastController, private router: Router,
    private dbService: DBService,
    public alertController: AlertController) {
    this.init();
  }

  ngOnInit() {
  }

  private async init(){
    this.loading = true;
    this.dbService.listAndWatch('/cliente').subscribe(data => this.loadListaDeClientes());
  }

  private async loadListaDeClientes(){
    this.dbService.listWithUIDs<Cliente>('/cliente')
    .then(listaDeClientes => {
      this.listaDeClientes = listaDeClientes;
      this.loading = false;
    }).catch(error =>{
        console.log(error);
    });
  } 

  async deleteMensagem( cliente: Cliente) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja Deletar este Cliente? ',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.remove(cliente);
          }
        }
      ]
    });
    await alert.present();
  }

  async edicaoDeCliente(cliente: Cliente) {
    const modal = await this.modalController.create({
      component: UpdateClientePage,
      componentProps: {
        editarCliente: cliente
      }
    });

    modal.onDidDismiss()
    .then(result => {
      if (result.data) {
        this.confirmarEdicaoCliente();
      }
    });

  return await modal.present();
}

private confirmarEdicaoCliente() {
  this.presentToast('Cliente Editado com sucesso');
  this.loadListaDeClientes();
}

async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000
  });
  toast.present();
}

remove(cliente: Cliente) {
  this.dbService.remove('/cliente', cliente.uid)
    .then((resultado) => {
      this.loadListaDeClientes();
    })
}

  backToPageDoCliente() {
    this.router.navigate(["/page-do-cliente"]);
  }

}
