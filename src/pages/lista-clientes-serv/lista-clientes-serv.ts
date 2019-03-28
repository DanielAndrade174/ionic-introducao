import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';

@IonicPage()
@Component({
  selector: 'page-lista-clientes-serv',
  templateUrl: 'lista-clientes-serv.html',
})
export class ListaClientesServPage {

  clientes : Cliente[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ClienteServ : ClienteService) {
  }

  ionViewDidLoad() {
    // subscribe somente com Observable
    this.ClienteServ.listaDeFilmes().subscribe(response=>{
      //console.log(response);
      this.clientes = response;
      //console.log(this.filmes);
    },error =>{
      console.log('servidor não disponível');
    })

  }

}