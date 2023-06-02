// funciones para mostrar (block)/ ocultar (none) mas informacion, cambiando el atributo display del elemento
function mostrar1(){
    document.getElementById('img1').style.display = 'block';
}
function ocultar1(){
    document.getElementById('img1').style.display = 'none';
 }
function mostrar2(){
    document.getElementById('img2').style.display = 'block';
}
function ocultar2(){
    document.getElementById('img2').style.display = 'none';
}
function mostrar3(){
    document.getElementById('img3').style.display = 'block';
}
function ocultar3(){
    document.getElementById('img3').style.display = 'none';
}

// funcion para redirigir a otra pagina usando JS (location.href)
function redirect(){
    location.href='opiniones.html'	
    }


//funcion para validar el ingreso de datos en la caja de comentarios e informar error o crear los elementos html para mostrarlos
    function commentBox(){
        var name=document.getElementById('name').value;
        var comment=document.getElementById('comment').value;
     
        if(name =="" || comment ==""){
            alert("Por favor ingresa los datos solicitados");
        }else{
            var parent=document.createElement('div');
            var el_name=document.createElement('h5');
            var el_message=document.createElement('p');
            var el_line=document.createElement('hr');
            var txt_name=document.createTextNode(name);
            var txt_message=document.createTextNode(comment);
            el_name.appendChild(txt_name);
            el_message.appendChild(txt_message);
            el_line.style.border='1px solid #000';
            parent.appendChild(el_name);
            parent.appendChild(el_line);
            parent.appendChild(el_message);
            parent.setAttribute('class', 'pane');
            document.getElementById('result').appendChild(parent);     
            document.getElementById('name').value="";
            document.getElementById('comment').value="";
        }
     
    }
    



    
   