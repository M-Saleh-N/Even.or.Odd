function CheckScore (score){
    if(score >= 90){
      console.log("What an amazing score! Did you cheat? Are you for real.")
    }
    else if (score >= 70){
       console.log("That's a great score, you really know your stuff.")
    }
    else if (score >= 40){
        console.log("You did a possable job, not bad!")
    }
    else if (score >= 20){
       console.log("You know some things, but it's a pretty bad score. Needs improvement.")
    }
    else if (score >= 0){
        console.log("That's was a terrible score - total fail!")
    }
    else
   console.log("INVALID SCORE")
}

CheckScore(21)