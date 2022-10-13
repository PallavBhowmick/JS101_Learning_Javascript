let NzScore=241;
let NzSuperOver=15;
let NzFours=21;
let EngScore=241;
let EngSuperOver=15;
let EngFours=26;

function worldCupFinal(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours) {
  if(NzScore > EngScore){
        console.log("New Zealand");
        }
  else{
        if(NzScore < EngScore){
           console.log("England");
             }
        else{
             if(NzSuperOver > EngSuperOver){
                 console.log("New Zealand");
                 }
              else{
                    if(NzSuperOver < EngSuperOver){
                       console.log("England");
                         }
                    else{
                      if(NzFours > EngFour){
                         console.log("New Zealand");
                             }
                      else{
                            if(Nzfours < EngFours){
                            console.log("England");
                             }
                          }
                        }
                }
            }
        }   
    }