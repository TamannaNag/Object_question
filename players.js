const players = [
    { name: "MS Dhoni", runs: 300, wickets: 1, catches: 7 },
    { name: "Hardik Pandya", runs: 400, wickets: 5, catches: 2 },
    { name: "KL Rahul", runs: 550, wickets: 0, catches: 1 }
]


function calculateMVP(players) {
    let totalscore ;
    let highestscore=0;
    let mvp='';
    for(let  i  of players){     
          totalscore =  i.runs+25*i.wickets+10*i.catches;
          if(totalscore>highestscore){
            highestscore= totalscore;
            mvp=i.name;
          }  
        // console.log(totalscore);
        // console.log(ele.name,ele.catches,ele.runs);  
    }   
    return mvp;
    
}
// calculateMVP(players)


console.log(calculateMVP(players));
