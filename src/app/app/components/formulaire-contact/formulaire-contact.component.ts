import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrl: './formulaire-contact.component.css'
})

export class FormulaireContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Envoie des données du formulaire au backend (Node.js)
    this.http.post('http://localhost:3000/send-email', this.contact).subscribe(response => {
      console.log('Message envoyé avec succès', response);
    }, error => {
      console.error('Erreur lors de l\'envoi du message', error);
    });
  }
}

