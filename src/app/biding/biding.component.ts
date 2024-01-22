import { Component } from '@angular/core';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.component.html',
  styleUrls: ['./biding.component.css']
})
export class BidingComponent {
titre:string = "Apprendre le DataBiding dans Angular 10";
status:boolean = true;
nom:string="Steve";
changerTitre(){
  this.titre="Mon nouveau titre";
}
}
