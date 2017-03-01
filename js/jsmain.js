// JavaScript Document

window.onload=function(){
	var oName=document.getElementById('name_man');
	var oUl1=document.getElementById('miss');
	var oMin=document.getElementById('min0');
	var aLi=oMin.getElementsByTagName('li');
	var oDiv=document.getElementById('box1');
	var aUl=oDiv.getElementsByTagName('ul');
	var timer=null;	
	
	oName.onmouseover=show;
	oName.onmouseout=hide;
	
	oUl1.onmouseover=show;
	oUl1.onmouseout=hide;
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=0;i<aUl.length;i++){
				aUl[i].style.display='none';	
			}
			aUl[this.index].style.display='block';	
		};	
	}
	
	
	function show(){
		clearInterval(timer);
		oUl1.style.display='block';	
	};
	function hide(){
		timer=setTimeout(function(){
		oUl1.style.display='none';
		},500);	
	}
	
};