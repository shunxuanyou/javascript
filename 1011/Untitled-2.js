// JavaScript Document

window.onload=function(){
 var dj=document.getElementById("dj");
 var tp=document.getElementById("tp");
 var x=1;
 dj.onclick=function(){
	 if(x==1){
		 tp.style.display="none";
		 x=2;
		 
	 }else if(x==2){
		 tp.style.display="block";
		 x=1;
		 
	 }
	 
	 
 }
	
	
}


	


