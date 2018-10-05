var height = 0;
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
}