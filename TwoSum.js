   function twosum(nums,target){
           for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                  if(nums[i]+nums[j]==target){
                      return([i,j]);
                  }
            }
        }
   };
     let nums=[4,6,5,2,9];
     let target=15;
        console.log(twosum(nums,target));


   
 



  
        

