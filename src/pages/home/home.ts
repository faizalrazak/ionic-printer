import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public printer:Printer) {

  }

  print(){
  	this.printer.isAvailable().then(function(){

        this.printer.print("https://www.techiediaries.com").then(function(){
            alert("printing done successfully !");
        },function(){
            alert("Error while printing !");
    	});
    }, 
    function(){
        alert('Error : printing is unavailable on your device ');
    });
  }

}
