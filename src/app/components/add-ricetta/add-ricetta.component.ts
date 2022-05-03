import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-add-ricetta',
  templateUrl: './add-ricetta.component.html',
  styleUrls: ['./add-ricetta.component.css']
})
export class AddRicettaComponent implements OnInit {

  @Input('showForm') showForm: boolean = false;
  @Output('chiudiInput') chiudiInput = new EventEmitter();
  @Output('newRicetta') newRicetta = new EventEmitter();

  form:FormGroup;
  // fb: FormBuilder;
  constructor(fb: FormBuilder) {
    // this.form = new FormGroup({
      // 'descrizione' : new FormControl('', Validators.required),
      // 'difficolta' : new FormControl('', Validators.required),
      // 'img': new FormControl('', Validators.required),
      // 'imgs': new FormArray([]),
      // 'ingredienti' : new FormArray([]),
      // 'descrizioneIngrediente' : new FormControl('', Validators.required),
      // 'quantitaIngrediente' : new FormControl('', Validators.required),
      // 'procedimento' : new FormControl('', Validators.required)
      this.form = fb.group ({
        descrizione : ['', Validators.required],
        difficolta :['', Validators.required],
        img: ['', Validators.required],
        imgs: fb.array([]),
        ingredienti :fb.array([]),
        descrizioneIngrediente : ['', Validators.required],
        quantitaIngrediente : ['', Validators.required],
        procedimento : ['', Validators.required]
  
  
    })
 
   }

  ngOnInit(): void {

  }

  chiusuraInput() {
    this.chiudiInput.emit();
  }

  createRecip(form: FormGroup) {
    // delete creationForm.value.imgToAdd;
    // creationForm.value['imgs'] = this.imgs;

    delete form.value.descrizioneIngrediente;
    delete form.value.quantitaIngrediente;
    // delete creationForm.value.quantToAdd;
    // creationForm.value['ingredienti'] = this.ingredienti;


    this.newRicetta.emit(form.value);
 
  }
 
  // addImage(img: string) {
  //   this.imgToAdd = "";
  //   this.imgs.push(img);
  // }

  // imgToAdd: string = "";

  // imgs: string[] = [];

  // addIngredient(descrizione:string, quantita:string){
  //   this.descToAdd =  "";
  //   this.quantToAdd =  "";
  //   this.ingredienti.push({descrizione, quantita})
  // }

  // descToAdd: string= "";
  // quantToAdd: string= "";
  // ingredienti:Ingrediente[]  = [];



  get descrizione(){
    return this.form?.get('descrizione')
  }
  get difficolta(){
    return this.form?.get('difficolta')
  }
  get img(){
    return this.form?.get('img')
  }
  get procedimento(){
    return this.form?.get('procedimento')
  }

  get imgs(){
    return this.form?.get('imgs') as FormArray
  }
  get ingredienti(){
    return this.form?.get('ingredienti') as FormArray
  }
  get descrizioneIngrediente(){
    return this.form?.get('descrizioneIngrediente')
  }
  get quantitaIngrediente(){
    return this.form?.get('quantitaIngrediente')
  }

  addImages(images: any){
   (this.form?.get('imgs') as FormArray).push(new FormControl(images.value));
   images.value="";
  }

  addIngredienti(ingredienti: any){
    (this.form?.get('ingredienti') as FormArray).push(new FormControl(ingredienti.value))
   }

   


}


