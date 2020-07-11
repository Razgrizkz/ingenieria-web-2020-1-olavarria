import { Component, OnInit } from '@angular/core';

import { ComentarioService } from 'src/app/comentario.service'

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit() {
  }

}
