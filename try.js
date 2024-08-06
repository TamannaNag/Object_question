const obj = {type:'electronic', 
    device:
    {car:
        {model:'maruti', engine:'petrol',prize:'102023'}
    } 
   ,
   owner:'you'
   }
   for(let key in obj.device){
    if( key == 'car'){
        
        for(let t in obj.device[key]){
            
            if(t == 'prize'){
                console.log(obj.device[key][t]);
            }
        }
    }

    
   }
//    console.log(obj.device.car.prize);