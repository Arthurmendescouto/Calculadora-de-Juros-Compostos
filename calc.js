document.getElementById('calculate').addEventListener('click',function(){
    const inicial=document.getElementById('ini')
    const plus=document.getElementById('plus')
    const fee=document.getElementById('fee')
    const rend=document.getElementById('time')
    var formula=(ini.value*(1+fee.value/100)**time.value)
    .toFixed(2).replace(".",",")
    
    document.getElementById('total').innerHTML=`R$ ${formula}`
})