 const ipaddress=(address)=>{
          let result='';
          for(let i=0;i<address.length;i++){
                if(address[i]==='.'){
                      result+="[.]"
                }else{
                    result+=address[i]
                }
          }
          return result;
 }

 console.log(ipaddress("1.1.1.1"));
 