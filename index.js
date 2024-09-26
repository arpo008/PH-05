

document.getElementById('noakhali').addEventListener("click", function(){


    const addmoney=document.getElementById('nflood').value ;
    const Addmoney= parseFloat(addmoney);
    const balance= document.getElementById ('mainbalance').innerText ;
     const Balance= parseFloat(balance);
     if(isNaN(Addmoney))
        {
            return alert("please Provide Valid Number");
        }
     const Dbalance= document.getElementById('nbalance').innerText;
     const newbalance= parseFloat(Dbalance);
     const a= newbalance+Addmoney;
     const b= Balance-Addmoney;
    if(Addmoney < Balance ){
         document.getElementById('nbalance').innerText=a;
            document.getElementById('mainbalance').innerText=b;
         }
         else{
            return alert("Not sufficient Balance");
         }
     

});

document.getElementById('feni').addEventListener("click", function(){


    const addmoney=document.getElementById('fflood').value ;
    const Addmoney= parseFloat(addmoney);
    const balance= document.getElementById ('mainbalance').innerText ;
     const Balance= parseFloat(balance);
     if(isNaN(Addmoney))
        {
            return alert("please Provide Valid Number");
        }
     const Dbalance= document.getElementById('fbalance').innerText;
     const newbalance= parseFloat(Dbalance);
     const a= newbalance+Addmoney;
     const b= Balance-Addmoney;
    if(Addmoney < Balance ){
         document.getElementById('fbalance').innerText=a;
            document.getElementById('mainbalance').innerText=b;
         }
         else{
            return alert("Not sufficient Balance");
         }
     

});

document.getElementById('quota').addEventListener("click", function(){


    const addmoney=document.getElementById('movement').value ;
    const Addmoney= parseFloat(addmoney);
    const balance= document.getElementById ('mainbalance').innerText ;
     const Balance= parseFloat(balance);
     if(isNaN(Addmoney))
        {
            return alert("please Provide Valid Number");
        }
     const Dbalance= document.getElementById('qbalance').innerText;
     const newbalance= parseFloat(Dbalance);
     const a= newbalance+Addmoney;
     const b= Balance-Addmoney;
    if(Addmoney < Balance ){
         document.getElementById('qbalance').innerText=a;
            document.getElementById('mainbalance').innerText=b;
         }
         else{
            return alert("Not sufficient Balance");
         }
     

});