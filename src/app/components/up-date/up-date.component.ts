import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { InterfacciaDettagli } from 'src/app/interfaces/interfaccia-dettagli';

@Component({
  selector: 'app-up-date',
  templateUrl: './up-date.component.html',
  styleUrls: ['./up-date.component.css']
})
export class UpDateComponent implements OnInit {

  @Input('ricetta') ricetta:InterfacciaDettagli = {}
  @Input('showFormMod') showFormMod: boolean = false;
  @Output('chiudiInput') chiudiInput = new EventEmitter();
  @Output('upDate') upDate = new EventEmitter();

  upDateForm: any;
  constructor() { 

  }

  ngOnInit(): void {
    this.upDateForm = new FormGroup({
      'descrizione' : new FormControl(this.ricetta.descrizione),
      'difficolta' : new FormControl(this.ricetta.difficolta),
      'img': new FormControl(this.ricetta.img),
      'imgs': new FormArray( []),
      'ingredienti' : new FormArray([]),
      'procedimento' : new FormControl(this.ricetta.procedimento)
  
  
    })

    this.ricetta.imgs?.forEach(f => {
      (this.upDateForm.get('imgs') as FormArray).push(new FormControl(f))
    })

    this.ricetta.ingredienti?.forEach(i => {
      (this.upDateForm.get('ingredienti') as FormArray).push(new FormControl(i))
    })
  }

  upD(ind: number, e:any){
    (this.upDateForm.get('imgs') as FormArray).at(ind).setValue(e.target.value)
  }

  upDa(inde: number, event: any){
   (this.upDateForm.get('ingredienti') as FormArray).at(inde).setValue({...(this.upDateForm.get('ingredienti') as FormArray).at(inde).value, descrizione: event.target.value})
  }

  upDat(inde:number, ev: any){
    (this.upDateForm.get('ingredienti') as FormArray).at(inde).setValue({...(this.upDateForm.get('ingredienti') as FormArray).at(inde).value, quantita: ev.target.value})
  }



  chiusuraInput() {
    this.chiudiInput.emit();
  }

  upDateRecip(upDateForm: FormGroup){
    delete upDateForm.value.descrizioneIngrediente;
    delete upDateForm.value.quantitaIngrediente;
    upDateForm.value['_id'] = this.ricetta._id;
     this.upDate.emit(upDateForm.value)
  }



}
