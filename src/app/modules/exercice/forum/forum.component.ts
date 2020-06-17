import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  personneForm = this.fb.group({
    id: [null, Validators.required],
    nom: ['', [Validators.pattern(/^[A-Z][a-z]{2,10}/), Validators.required]],
    prenom: ['', [Validators.required]],
    comments: this.fb.array([
      this.fb.group({
        titre: [''],
        contenu: [''],
        categorie: ['']
      }),
    ])
  });
  constructor(private fb: FormBuilder) { }


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
  get comments() {
    return this.personneForm.get('comments') as FormArray;
  }
  ajouterCommentaire() {
    this.comments.push(this.fb.group({
      titre: [''],
      contenu: [''],
      categorie: ['']
    }));
  }

  ngOnInit(): void {
  }

}
