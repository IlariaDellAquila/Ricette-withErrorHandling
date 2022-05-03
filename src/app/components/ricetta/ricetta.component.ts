import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceRicetteService } from 'src/app/services/service-ricette.service';
import { InterfaceRicette } from '../../interfaces/interface-ricette';


@Component({
  selector: 'app-ricetta',
  templateUrl: './ricetta.component.html',
  styleUrls: ['./ricetta.component.css']
})
export class RicettaComponent implements OnInit {

  @Input('r') ricetta : InterfaceRicette | undefined;
  @Output('dettaglio') dettaglio = new EventEmitter();
  @Output('eliminaRicetta') eliminaRicetta = new EventEmitter();

  constructor(private _service: ServiceRicetteService) { }

  ngOnInit(): void {
  }

  dettagli(id:string | undefined){
   this.dettaglio.emit(id);
  }

  elimina(id:string | undefined){
   this.eliminaRicetta.emit(id);
  }

}
