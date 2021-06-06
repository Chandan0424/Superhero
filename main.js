canvas= new fabric.Canvas('myCanvas');
Block_Image_Width=30;
Block_Image_Height=30;
Block_Image_Object="";
Player_X=10;
Player_Y=10;
Player_Object="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        Player_Object=Img;

        Player_Object.scaleToWidth(100);
        Player_Object.scaleToHeight(90);
        Player_Object.set({
            top:Player_Y,
            left:Player_X
        });
        canvas.add(Player_Object);
    });
}

window.addEventListener("keydown",myKeyDown);

function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        Block_Image_Object=Img;
        Block_Image_Object.scaleToHeight(Block_Image_Height);
        Block_Image_Object.scaleToWidth(Block_Image_Width);
        Block_Image_Object.set({
            top:350,
            left:400
        })
        canvas.add(Block_Image_Object);
    })
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=='80'){
        Block_Image_Width=Block_Image_Width+10;
        Block_Image_Height=Block_Image_Height+10;
        document.getElementById("Width").innerHTML=Block_Image_Width;
        document.getElementById("Height").innerHTML=Block_Image_Height;
    }
    if(e.shiftKey==true && keyPressed=='77'){
        Block_Image_Width=Block_Image_Width-10;
        Block_Image_Height=Block_Image_Height-10;
        document.getElementById("Width").innerHTML=Block_Image_Width;
        document.getElementById("Height").innerHTML=Block_Image_Height;
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='39'){
        right();
    }
    if(keyPressed=='40'){
        down();
    }

    if(keyPressed=='72'){
        console.log("c");
        newImage('hulk_left_hand.png');
    }
    if(keyPressed=='73'){
        console.log("t");
        newImage('ironman_left_hand.png');
    }
    if(keyPressed=='83'){
        console.log("s");
        newImage('spiderman_left_hand.png');
    }
    if(keyPressed=='84'){
        console.log("t");
        newImage('thor_left_hand.png');
    }
    if(keyPressed=='65'){
        console.log("a");
        newImage('hulk_right_hand.png');
    }
    if(keyPressed=='85'){
        console.log("u");
        newImage('ironman_right_hand.png');
    }
    if(keyPressed=='67'){
        console.log("c");
        newImage('captain_america_left_hand.png');
    }
    if(keyPressed=='82'){
        console.log("r");
        newImage('spiderman_right_hand.png');
    }
    if(keyPressed=='79'){
        console.log("o");
        newImage('thor_right_hand.png');
    }
    if(keyPressed=='76'){
        console.log("l");
        newImage('hulk_legs.png');
    }
    if(keyPressed=='78'){
        console.log("n");
        newImage('ironman_legs.png');
    }
    if(keyPressed=='68'){
        console.log("d");
        newImage('spiderman_legs.png');
    }
    if(keyPressed=='75'){
        console.log("k");
        newImage('hulkd_body.png');
    }
    if(keyPressed=='71'){
        console.log("g");
        newImage('ironman_body.png');
    }
    if(keyPressed=='69'){
        console.log("e");
        newImage('spiderman_body.png');
    }
    if(keyPressed=='70'){
        console.log("f");
        newImage('hulk_face.png');
    }
    if(keyPressed=='66'){
        console.log("b");
        newImage('ironman_face.png');
    }
    if(keyPressed=='88'){
        console.log("x");
        newImage('spiderman_face.png');
    }
    if(keyPressed=='81'){
        console.log("q");
        newImage('thor_face.png');
    }
}

function left(){
    if(Player_X>0){
        Player_X=Player_X-10;
        canvas.remove(Player_Object);
        playerUpdate();
    }
}

function right(){
    if(Player_X<700){
        Player_X=Player_X+10;
        canvas.remove(Player_Object);
        playerUpdate();
    }
}

function up(){
    if(Player_Y>0){
        Player_Y=Player_Y-10;
        canvas.remove(Player_Object);
        playerUpdate();
    }
}

function down(){
    if(Player_Y<600){
        Player_Y=Player_Y+10;
        canvas.remove(Player_Object);
        playerUpdate();
    }
}
