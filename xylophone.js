function sumOfNodes(stringkey) 
{
   var a=[];
   var c=0;
   var temp=[];

 if (stringkey.length===0) 
    {
                return(alert("Please enter a valid input"));
                
    }
    else if(stringkey.length>50)
    {
                return(alert("Please enter a valid input (1-50 char)"));
    }
    else
{


   for(var i=0;i<stringkey.length;i++)
   {
        if(stringkey[i]>7)
        {
           
            while(stringkey[i]>7)
            {
                stringkey[i]=stringkey[i]-7;
            }

            a[i]=stringkey[i];

        }
        else
        {
            a[i]=stringkey[i];
        }
   }
   
    for(var i = 0; i < a.length; i++){
        if(temp.indexOf(a[i]) == -1){
        temp.push(a[i]);
        }
    }
    
   return(alert("number of notes: "+temp.length));
  
}
}
