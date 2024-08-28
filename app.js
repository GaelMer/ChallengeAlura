document.getElementById("textoProcesado").style.display = "none";

function qwerty(str) {
    
    var alphabets =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'," "];
    
    var alphabetsqwerty = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m', " "];
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabetsqwerty[j]);
            }
        }
    }
    return resultStr.join("");
  };

  function unqwerty(str) {
    
    var alphabets =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'," "];
    
    var alphabetsqwerty = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m', " "];
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabetsqwerty.length; j++){
            if(str[i] === alphabetsqwerty[j]){
            resultStr.push(alphabets[j]);
            }
        }
    }
    return resultStr.join("");
  };


function encriptar()
{
    
    var text = document.getElementById("textoIn").value;
    document.getElementById("textoOut").innerHTML = qwerty(text);
    document.getElementById("textoProcesado").style.display = "block";
    document.getElementById("muneco").style.display = "none";
    
        /*if (x.style.display === "none") 
            {
                x.style.display = "block";
            } else 
                {
                    x.style.display = "none";
                }*/
}

function desencriptar()
{
    var text = document.getElementById("textoIn").value;
    document.getElementById("textoOut").innerHTML = unqwerty(text);
    document.getElementById("textoProcesado").style.display = "block";
    document.getElementById("muneco").style.display = "none";
}

function copiar()
{
    document.getElementById("boton-copiar").onclick = function() 
    {
      let text = document.getElementById("textoOut").value;
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Text copied to clipboard');
        })
        .catch(err => {
          alert('Error in copying text: ', err);
        });
    }
}





