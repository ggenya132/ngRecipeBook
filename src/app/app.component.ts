import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(){

    firebase.initializeApp({
       apiKey: "AIzaSyBTPmtaCxwDN_RwXHU7cDLnEuDbZVo7Ono",
      authDomain: "ng-recipe-book-8e514.firebaseapp.com"
  
    })
  }
}
