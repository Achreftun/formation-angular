import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // personneForm = new FormGroup({
  //   id: new FormControl('', Validators.required),
  //   nom: new FormControl('', [Validators.pattern(/^[A-Z][a-z]{2,10}/), Validators.required]),
  //   prenom: new FormControl('', [Validators.required, checkPrenomValidator]),
  //   adresse: new FormGroup({
  //     rue: new FormControl(''),
  //     ville: new FormControl(''),
  //     codePostal: new FormControl('')
  //   })
  // });
  personneForm = this.fb.group({
    id: [null, Validators.required],
    nom: ['', [Validators.pattern(/^[A-Z][a-z]{2,10}/), Validators.required]],
    prenom: ['', [Validators.required, checkPrenomValidator]],
    adresse: this.fb.group({
      rue: [''],
      ville: [''],
      codePostal: ['']
    }),
    sports: this.fb.array([
      this.fb.control('')
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  afficherTout() {
    console.log(this.personneForm.value);
  }
  get nom() {
    return this.personneForm.get('nom');
  }

  get id() {
    return this.personneForm.get('id');
  }

  get prenom() {
    return this.personneForm.get('prenom');
  }
  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }
  ajouterSport() {
    this.sports.push(this.fb.control(''));
  }
}
function checkPrenomValidator(control: FormControl) {
  const str: string = control.value;
  if (str[0] >= 'A' && str[0] <= 'Z') {
    return null;
  } else {
    return { erreur: 'Prénom non valide' };
  }
}
