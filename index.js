

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
     
         addmoney.value='';
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


            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            
             div.innerHTML= `
             const currentDate = new Date();
            const formattedDate = currentDate.toString();
                <p ckass="text-xl font-bold "> ${Addmoney} Taka is Donated For Noakhali -2024, Bangladesh </p>
                <p class="text-sm text-black-500">Donation recorded on: ${formattedDate}</p>
             
             `
             
             document.getElementById('History-container').appendChild(div);
         }
         else{
            return alert("Not sufficient Balance");
         }
     
         addmoney.value='';
    
        


});


function showSecByID(id)
{
    document.getElementById('Donation-part').classList.add('hidden');
    document.getElementById('History-part').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}