import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfaceRicette } from 'src/app/interfaces/interface-ricette';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input ('showModalDelete') showModalDelete : boolean = false;
  @Output('chiudiModalDelete') chiudiModalDelete = new EventEmitter();
  @Output('recDelete') recDelete = new EventEmitter();
  @Input('idRicetta') idRicetta: string ='';


  constructor() { }

  ngOnInit(): void {

  }

  chiusuraModalDelete(){
    this.chiudiModalDelete.emit();
  }

  recipeDelete(){
    this.recDelete.emit(this.idRicetta);
  }

}
