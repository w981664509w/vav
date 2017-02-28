// JavaScript Document
window.onload=function(){
	var oUl=document.getElementById('ul_list');
	var aLi=oUl.getElementsByTagName('li');
	var oImg=document.getElementById('img1');
	var oPic=document.getElementById('pic');
	var oDiv=document.getElementById('list');
	var aP=oDiv.getElementsByTagName('p');
	var aUl=oDiv.getElementsByTagName('ul');
	
	var num=0;
	var timer=null;

	for(var i=0;i<aP.length;i++){
		aP[i].index=i;
		aP[i].onmouseover=function(){
			show(aUl[this.index]);	
		};
		aP[i].onmouseout=function(){
			hide(aUl[this.index]);	
		};
	}
	
	for(var i=0;i<aUl.length;i++){
		aUl[i].onmouseover=function(){
			show(this);	
		};	
		aUl[i].onmouseout=function(){
			hide(this);	
		};	
	}
	
	function show(obj){
		clearInterval(obj.shake);
		obj.style.display='block';	
	}
	
	function hide(obj){
		obj.shake=setTimeout(function(){
		obj.style.display='none';
		},500);	
	};
	
	
	setTimeout(autoPlay,2000);
	oPic.onmouseover=function(){
		clearInterval(timer);	
	};
	oPic.onmouseout=autoPlay;

	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			num=this.index;
			tab();
		};	
	}
	
	function autoPlay(){
		clearInterval(timer);
		timer=setInterval(function(){
			num++;
			num%=aLi.length;
			tab();	
			},1000);
	}
	
	function tab(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';	
		}
		oImg.src='img/'+(num+1)+'.jpg';
		aLi[num].className='active';				
	}
		
};