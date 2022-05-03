import { Component } from '@angular/core';
import { AppError } from './common/app-error';
import { BadInnput } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';
import { InterfacciaDettagli } from './interfaces/interfaccia-dettagli';
import { InterfaceRicette } from './interfaces/interface-ricette';
import { ServiceRicetteService } from './services/service-ricette.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ricette';
  ricette: InterfaceRicette[] = [];
  dettaglio: InterfacciaDettagli | undefined;
  error: BadInnput | undefined;

  constructor(private _service: ServiceRicetteService) { }

  ngOnInit(): void {
    this._service.getAllRicette().subscribe(
    (data: any) => {
      this.ricette = data;
    })
    
  }

  showModal: boolean = false;
  showForm: boolean = false;
  showFormMod: boolean = false;
  showModalDelete: boolean = false;
  errMessage: string = '';
  showModalError: boolean = false;

  showDetail(id: string | any = undefined) {
    this.showModal = true;
    this._service.getDettagliRicette(id).subscribe(
      (data: any) => {
        this.dettaglio = data;
    }, 
    error => console.log(error.message)
    );
  }



  closeModal() {
    this.showModal = false;
  }

  showModalForm() {
    this.showForm = true;
  }


  closeInput() {
    this.showForm = false;
    this.showFormMod = false;
  }

  addNewRicetta(ricetta: any) {
    this.showForm = false;
    this._service.addRicettaBadRequest(ricetta).subscribe(
      (data: any) => {
        this.ricette.push(data);
    }, 
    (error: AppError) =>{
      if(error instanceof BadInnput){
        this.error = error
        this.errMessage = error.error.message;
        console.log(error)
      } else throw error;
    }
    );
  }

  modalModifica() {
    this.showFormMod = true;
  }

  upDateRec(dettaglio: InterfacciaDettagli) {
    this.showFormMod = false;

    this._service.modificaRicetta(dettaglio).subscribe(
      (data: any) => {
       console.log(dettaglio);
    })
  }

  idDetail:string = '';
  showModalDele(id: string ){
    this.idDetail=id;
    this.showModalDelete = true;
  }

  closeDelete(){
    this.showModalDelete = false;
  }

  deleteRec(id: string) {
    this.showModalDelete = false;
    this._service.deleteRicette404().subscribe(
      (data: any) => {
       this.ricette = this.ricette.filter(data => data._id !== id);
    }, 
    (error: AppError) =>{
      if(error instanceof NotFoundError){
        this.error = error
        this.errMessage="Non è possibile eliminare la ricetta!"
        console.log(error)
      } else throw error;
    }
    );
  }
}
