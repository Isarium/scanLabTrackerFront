import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
 
@Injectable({

  providedIn: 'root',

})

export class ScanService {

  constructor(private readonly http: HttpClient) {}
 
  downloadExcel(): void {

    const url = 'http://localhost:8080/excel/generate'; // Remplacez par l'URL de votre API
 
    this.http.get(url, { responseType: 'blob' }).subscribe({

      next: (data) => {

        console.log('Fichier reçu avec succès', data);

        this.saveFile(data, 'fichier.xlsx'); // Sauvegarde le fichier

        alert('Votre fichier à bien été chargé !');

      },

      error: (err) => {

        console.error('Erreur lors du téléchargement du fichier:', err);

      },

    });

  }
 
  private saveFile(data: Blob, filename: string): void {

    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const url = window.URL.createObjectURL(blob);
 
    const anchor = document.createElement('a');

    anchor.href = url;

    anchor.download = filename;

    anchor.click();
 
    window.URL.revokeObjectURL(url); // Nettoyage de l'URL pour éviter les fuites mémoire

  }

}

 