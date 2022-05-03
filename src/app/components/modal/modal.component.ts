import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfacciaDettagli } from 'src/app/interfaces/interfaccia-dettagli';
import { ServiceRicetteService } from 'src/app/services/service-ricette.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  @Input ('ricetta') ricetta : InterfacciaDettagli | undefined;
  @Input ('showModal') showModal : boolean = false;
  @Output('chiudiModal') chiudiModal = new EventEmitter();
  @Output('modificaRicetta') modificaRicetta = new EventEmitter();


  constructor(private _service: ServiceRicetteService) { }

  ngOnInit(): void {
  }

  chiusuraModal(){
    this.chiudiModal.emit();
  }

  modifica(id:string | any){
   this.chiudiModal.emit()
   this.modificaRicetta.emit();
  }




}
