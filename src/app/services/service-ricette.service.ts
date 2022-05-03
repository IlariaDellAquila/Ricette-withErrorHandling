import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfacciaDettagli } from '../interfaces/interfaccia-dettagli';
import { catchError, ObservableInput } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInnput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class ServiceRicetteService {

  constructor( private _http : HttpClient) { }

  getAllRicette(){
    return this._http.get('https://pumpkin-pie-18472.herokuapp.com/all')
    .pipe(
      catchError(this._handleError) 
    )
  }

  getDettagliRicette(id:string){
    return this._http.get('https://pumpkin-pie-18472.herokuapp.com/' + id)
    .pipe(
      catchError(this._handleError) 
    )
  }

  // deleteRicette(id:string){
  //   return this._http.delete('https://pumpkin-pie-18472.herokuapp.com/' + id)
  //   .pipe(
  //     catchError(this._handleError) 
  //   )
  // }

  deleteRicette404(){
    return this._http.delete('https://pumpkin-pie-18472.herokuapp.com/' )
    .pipe(
      catchError(this._handleError) 
    )
  }

  // addRicetta(ricetta: InterfacciaDettagli){
  //   return this._http.post('https://pumpkin-pie-18472.herokuapp.com', ricetta )
  //   .pipe(
  //     catchError(this._handleError) 
  //   )
  // }

  addRicettaBadRequest(ricetta: InterfacciaDettagli | any){
    ricetta['ciao'] = 'ciao';
    return this._http.post('https://pumpkin-pie-18472.herokuapp.com', ricetta)
    .pipe(
      catchError(this._handleError) 
    )
  }

  modificaRicetta( ricetta:any){
    return this._http.put('https://pumpkin-pie-18472.herokuapp.com/' + ricetta._id, ricetta)
    .pipe(
      catchError(this._handleError) 
    )
  }

  private _handleError(error:Response):ObservableInput<any>{
    if(error.status === 400)
       throw new BadInnput(error);
    if(error.status === 404)
    throw new NotFoundError()

    throw new AppError(error)
  }

}
