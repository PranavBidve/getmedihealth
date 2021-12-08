

function sub()
{
  
  if(name.innerHTML != '')
  {
    res.innerHTML = `<div class="alert alert-success" role="alert">
  Your details have been recorded.
</div>`;
  }

setTimeout(() => {

  res.innerHTML=''
  console.log('print');

}, 3000);

}