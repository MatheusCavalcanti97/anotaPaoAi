import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.page.html',
  styleUrls: ['./nova-despesa.page.scss'],
})
export class NovaDespesaPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


}
