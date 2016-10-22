import { Component, OnInit } from '@angular/core';

export class characterStat {
  score:number;
  modifier:number;

  
}
export class characterStatExtended {
  base:number;
  ability:number;
  resist:number;
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  STR:characterStat;
  DEX:characterStat;
  CON:characterStat;
  INT:characterStat;
  WIS:characterStat;
  CHA:characterStat;

  
  Fortitude:characterStatExtended;
  Reflex:characterStatExtended;
  Will:characterStatExtended;
  level:number;
  AC:number;
  TouchAC:number;
  baseAttack:number;
  initiative:number;
  rage:boolean;
  powerAttack:boolean;
  GODMODE:boolean;
  powerAttackBonus:number;

   Rage = function(){
    if(this.rage){
      this.rage = false;
      this.STR.score = this.STR.score -4;
      this.CON.score = this.CON.score -4;
    
    }
    else{
      this.rage = true;
      this.STR.score = this.STR.score +4;
      this.CON.score = this.CON.score +4;
      //fortitude is increased by 2
    }
    console.log("Calling Rage\n rage = "+this.rage);
    

    }

    modifier = function(){
      return ((this.STR.score -10)/2);
    }

    calcBase = function(level){
      var counter = -1;
      
      if(level <4){
        return counter;
      }
     
      var tempx = level/4;
     
      var x = parseInt(""+tempx);
      
      while(x >0){
        counter = counter -1;
        --x;
      }
      return counter;

    }
    calcHitBonus = function(level){
      var bonus = 2;
      if(level <4){
        return bonus*1.5;
      }

       var tempx = level/4;
     
      var x = parseInt(""+tempx);
      while(x >0){
        bonus = bonus +2;
        --x;
      }
      return bonus *1.5;


    }

    PowerAttack = function(){
      if(this.powerAttack){
        this.powerAttack = false;
        this.powerAttackBonus = 0;
        console.log(this.calcBase(this.level));
        this.baseAttack = this.baseAttack - this.calcBase(this.level);

        
      }
      else{
        this.powerAttack = true;
        this.powerAttackBonus = this.calcHitBonus(this.level);
        console.log(this.calcBase(this.level));
        this.baseAttack = this.baseAttack + this.calcBase(this.level);
      }
      console.log("Calling Power Attack\n powerAttack = "+this.powerAttack);

    }
    godMode = function(){
      if(this.GODMODE){
        this.GODMODE = false;
        this.STR.score = this.STR.score -6;
        this.DEX.score = this.DEX.score -2;
        this.DEX.modifier = this.DEX.modifier -1;

      }
      else{
        this.GODMODE = true;
        this.STR.score = this.STR.score +6;
        this.DEX.score = this.DEX.score +2;
        this.DEX.modifier = this.DEX.modifier +1;


      }

    }




  constructor() {
  this.powerAttackBonus = 0;
  this.level = 10;
  /* Assign all values */
  this.rage = false;
  this.powerAttack = false;
  this.GODMODE = false;
  //STR
  this.STR = new characterStat();
  
  this.STR.score = 22;
  this.STR.modifier = (this.STR.score - 10)/2 ;

  //DEX
  this.DEX = new characterStat();
  this.DEX.modifier = 3;
  this.DEX.score = 16;

  //CON
  this.CON = new characterStat();
  this.CON.modifier = 1;
  this.CON.score = 12;
  
  //INT
  this.INT = new characterStat();
  this.INT.modifier = -1;
  this.INT.score = 9;

  //WIS
  this.WIS = new characterStat();
  this.WIS.modifier = 3;
  this.WIS.score = 16;

  //CHA
  this.CHA = new characterStat();
  this.CHA.modifier = 2;
  this.CHA.score = 14;
  
  //Fortitude
  this.Fortitude = new characterStatExtended();
  this.Fortitude.base = 7;
  this.Fortitude.ability = 1;
  this.Fortitude.resist = 1;

  //Reflex
  this.Reflex = new characterStatExtended();
  this.Reflex.base = 3
  this.Reflex.ability = 3 
  this.Reflex.resist = 1
  
  //Will
  this.Will = new characterStatExtended();
  this.Will.base = 3;
  this.Will.ability = 3; 
  this.Will.resist = 1;
  
  //AC
  this.AC = 20;
  
  //TouchAC
  this.TouchAC = 13;
  
  this.baseAttack = 9;
  this.initiative = 3;


   }

  ngOnInit() {
  }



}