import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-reinitialisation-mdp',
  templateUrl: './reinitialisation-mdp.component.html',
  styleUrl: './reinitialisation-mdp.component.css'
})
export class ReinitialisationMDPComponent {

  email : string = '' ;
  emailLabel : string = '' ;
  isEmailEmpty: boolean = false;

  isEmpty() {
  if(!this.email){
    this.emailLabel = "Veuillez entrer l'email" ;
    this.isEmailEmpty = true ;
  } 
  }
}
