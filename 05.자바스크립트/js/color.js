
        var color = ["white","yellow","aqua","purple"];

        var i=0;

        function changeColor(){
            i++;
           
            if(i>3){
                i=0;
            }

            var bodyTag = document.getElementById("thebody");
            bodyTag.style.backgroundColor = color[i];

        }
