import { ModalController } from '@ionic/angular';
import { DBService } from './../services/db.services';
import { Cliente } from './../model/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.page.html',
  styleUrls: ['./update-cliente.page.scss'],
})
export class UpdateClientePage implements OnInit {

  date1 : string;
  date2 : string;
  editarCliente: Cliente;
  novoCliente: Cliente;

  constructor(public modalController: ModalController, private dbService: DBService) {
    this.novoCliente = new Cliente();
    this.date1 = new Date().toISOString();
     this.date2 = new Date().toISOString();
  }

  ngOnInit() {
    if (this.editarCliente) {
      this.novoCliente = this.editarCliente;
    }
  }

  save() {
    if (this.editarCliente) {
        this.edicaoDeCliente();
    }
  }

  private edicaoDeCliente() {
    this.novoCliente.dataNascimento = new Date(this.date1).getTime();
    this.novoCliente.dataDeCadastro = new Date(this.date2).getTime();
    const updatingObject = { nomeCliente: this.novoCliente.nomeCliente,  identidade : this.novoCliente.identidade, cpf : this.novoCliente.cpf, cidade : this.novoCliente.cidade, endereco : this.novoCliente.endereco, dataNascimento : this.novoCliente.dataNascimento, dataDeCadastro : this.novoCliente.dataDeCadastro};
    this.dbService.update('/cliente', this.novoCliente.uid, updatingObject)
      .then(() => {
        this.modalController.dismiss(this.novoCliente);
      }).catch(error => {
        console.log(error);
      });
  }

  voltarParaListaDeClientes() {
    this.modalController.dismiss();
  }


}
