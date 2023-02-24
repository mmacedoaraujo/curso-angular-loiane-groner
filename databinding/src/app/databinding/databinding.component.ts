import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/536/354';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
