import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UrlAPIService } from '../service/url-api.service';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  countries!: Observable<Country[]>

  constructor(private service: UrlAPIService) {}

  ngOnInit(): void {
    this.countries = this.service.pegarTodosPaises();
  }

}
