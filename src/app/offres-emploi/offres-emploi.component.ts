import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  bnoffre=0;
  show=false;
  search='';
  listeEmploi:Emploi[]=[
    {reference:'sd123',titre:'developpeur',entreprise:'pwc',etat:true},
    {reference:'ad551',titre:'consultant',entreprise:'pwc',etat:false},
    {reference:'cb551',titre:'administrateur BD',entreprise:'TAC',etat:false}];
  constructor() { }
billan(){
  for (let i=0;i<this.listeEmploi.length;i++){
    if(this.listeEmploi[i].etat==false){
      this.bnoffre++;
    }
    this.show=true;

  }
}
  ngOnInit(): void {
  }

}
