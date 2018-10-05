/*var height = 0;
var maxHeight = 8;
var width = 0;
var maxWidth = 8;
var space = "O";
var hash = "#";
var line = " ";

while(height < maxHeight){
    if(height%2 == 0){
        while(width < maxWidth){
            if(line.charAt(width) == "O"){
                line = line + hash;
            }
            else{
                line = line + space;
            }
            width += 1;
        }
    }
    else{
        while(width < maxWidth){
            if(line.charAt(width) == "#"){
                line = line + space;
            }
            else{
                line = line + hash;
            }
            width += 1;
        }
    }
    console.log(line);
    line = " ";
    width = 0;
    height += 1;
}*/

var a = " #";
var b = "# ";
var size = 8;
var sw = true;
var line = "";

for(var i = 0; i < size; i++){
    if(sw){
        while(line.length < size){
            line = line + a
        }
    }
    else{
        while(line.length<size){
            line = line + b
        }
    }
    console.log(line);
    line="";
    if(sw){
        sw = false;
    }
    else{
        sw = true;
    }
}


