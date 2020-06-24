import { Component, OnInit } from '@angular/core';
import {Jeu} from "../jeu";

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {

  public jeu: Jeu;
  public jeuLance: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
