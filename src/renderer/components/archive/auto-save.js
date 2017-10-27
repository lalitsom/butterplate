export  default function autosave(){
  
  window.save_btn = document.getElementsByClassName('cpivao')[0];
  if(save_btn){
    document.getElementsByClassName('cpivao')[0].click();
  }
console.log('triggered')
}
