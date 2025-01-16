import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrl: './formulaire-contact.component.css'
})

export class FormulaireContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.sendEmail(formData).subscribe(
        response => {
          console.log('Email envoyé avec succès!', response);
          alert('Message envoyé avec succès!');
        },
        error => {
          console.log('Erreur lors de l\'envoi de l\'email', error);
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      );
    } else {
      console.log('Le formulaire est invalide');
      alert('Veuillez remplir correctement tous les champs.');
    }
  }

  // Fonction pour appeler l'API backend et envoyer l'email
  sendEmail(formData: any): Observable<any> {
    return this.http.post('http://localhost:3000/send-email', formData);
  }
}
