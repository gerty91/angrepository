import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modulo per gestione dati';
  titoloArticolo:string;
  autoreArticolo:string;


  aggiungiArticolo(titolo: HTMLInputElement,autore: HTMLInputElement): boolean{
    console.log(`Articolo: ${titolo.value},${autore.value}`)
    this.titoloArticolo=titolo.value;
    this.autoreArticolo=autore.value;
    return false; //così non ricarica la pagina, non reindirizziamo
  }
}
