function 

wagecalculator(h,nh,w){

if(h<=0||nh<=0||w<=0){

throw Error('Number cannot be negative');

}

else{

return h*nh*w;

}

}



function 

calculate(){



var h=

$("#box1").val();



var nh=document.getElementById("box2").value;



var w=$("#query").val();



var r=

wagecalculator(h,nh,w);



$("#output").html(r);
}