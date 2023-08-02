//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
   pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}



function wallpaper_background() {
  background(126, 149, 171); //space colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


//eye
var eyeNo = (true)
var eyeLOCX = 60;
var eyeLOCY = 50;
var eyeCOL = ("#e6dada")
var eyeLINE =("#000000")
var eyeSIZE = (4)

//rainbow 
strokeWeight (10)
//line
stroke("#285943")
line (130,0,130,80)
line (130,80,30,80)
line (30,80,30,200)
//line
stroke("#EDD4B2")
line (140,0,140,90)
line (140,90,40,90)
line (40,90,40,200)
//line 
stroke("#2E294E")
line (150,0,150,100)
line (150,100,50,100)
line (50,100,50,200)
//line 
stroke("#F0386B")
line (160,0,160,110)
line (160,110,60,110)
line (60,110,60,200)
//line 
stroke("#1B998B")
line (170,0,170,120)
line (170,120,70,120)
line (70,120,70,200)

//eye1
strokeWeight (2)
stroke (eyeLINE)
fill (eyeCOL)
ellipse(eyeLOCX,eyeLOCY,70,30) //ball
fill (eyeLINE)
ellipse(eyeLOCX,eyeLOCY,10,30) //puple 
//eye lash
//x60 y50
strokeWeight(eyeSIZE);
line (eyeLOCX,eyeLOCY-15,eyeLOCX,eyeLOCY-30)
line (eyeLOCX+10,eyeLOCY-15,eyeLOCX+10,eyeLOCY-25)
line (eyeLOCX-10,eyeLOCY-15,eyeLOCX-10,eyeLOCY-25)
line (eyeLOCX+20,eyeLOCY-12,eyeLOCX+20,eyeLOCY-20)
line (eyeLOCX-20,eyeLOCY-12,eyeLOCX-20,eyeLOCY-20)


//eye2
fill (eyeCOL)
ellipse(160,150,70,30) //ball
fill (eyeLINE)
ellipse(160,150,10,30) //puple 
strokeWeight(eyeSIZE);





//kiwi old code 
 // var HeadSize = 40
  //var BodySize =70
  //var EyeSize =5
  //var FlowerC =("#d98d80")
  //var kiwiC =("#7d6b45")


//fill (kiwiC)
  //ellipse(100, 100,BodySize); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
  //ellipse(80, 80,HeadSize);//head 

//fill  (0, 0, 0)
  //ellipse(85, 80, EyeSize); // eye

  //line(70,85,50,100) //beek 

  //line(100, 130, 100, 150) //leg
  //line(90, 150, 100, 150)

//fill (FlowerC)

  //ellipse(30,150,20,10) //flower
  //ellipse(20,154,20,10)
  //ellipse(40,154,20,10)
  //ellipse(30,158,20,10)

  //ellipse(130,170,20,10) 
  //ellipse(120,174,20,10)
  //ellipse(140,174,20,10)
  //ellipse(130,178,20,10)

  //ellipse(180,130,20,10) 
  //ellipse(170,134,20,10)
  //ellipse(190,134,20,10)
  //ellipse(180,138,20,10)
}
function draweye1 (x, y){
  strokeWeight (2)
stroke (eyeLINE)
fill (eyeCOL)
ellipse(x,y,70,30) //ball
fill (eyeLINE)
ellipse(x,y, 10,30) //puple 
//eye lash
//make thicker
strokeWeight(eyeSIZE);
line (60,35,60,20)
line (70,35,70,25)
line (50,35,50,25)
line (80,38,80,30)
line (40,38,40,30)
}