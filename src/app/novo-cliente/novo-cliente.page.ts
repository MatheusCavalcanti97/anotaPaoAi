import { Cliente } from './../model/Cliente';
import { ModalController } from '@ionic/angular';
import { DBService } from './../services/db.services';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.page.html',
  styleUrls: ['./novo-cliente.page.scss'],
})
export class NovoClientePage implements OnInit {

  date1 : string;
  date2 : string;
  editeCliente : Cliente;
  novoCliente : Cliente;

  constructor(public modalController: ModalController, private router: Router, private dbService: DBService) { 
    this.novoCliente = new Cliente();
     this.date1 = new Date().toISOString();
     this.date2 = new Date().toISOString();
  }

  ngOnInit() {
    if(this.editeCliente){
      this.novoCliente = this.editeCliente;
    }
  }

  async insert(){
    this.novoCliente.dataNascimento = new Date(this.date1).getTime();
    this.novoCliente.dataDeCadastro = new Date(this.date2).getTime();
    this.dbService.insertInList<Cliente>('/cliente', this.novoCliente);
    this.novoCliente = new Cliente();
    
  }

  backToPageDoCliente(){
    this.router.navigate(['/page-do-cliente']);
  }

}
