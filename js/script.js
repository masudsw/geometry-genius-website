function calculateTringleArea(){
    const b=parseFloat(document.getElementById('base').value);
    const h=parseFloat(document.getElementById('height').value);
    document.getElementById('result-tringle-area').innerText=0.5*b*h;
}
document.getElementById('bt-parallelogram').addEventListener('click',function(){
    document.getElementById('result-parallelogram-area').innerText=
    parseFloat(document.getElementById('input-parallelogram-base').value) * 
    parseFloat(document.getElementById('input-parallelogram-height').value);
});