//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
   pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}



function wallpaper_background() {
  background(126, 149, 171); //space colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


//eye
var eyeLOCX = 60;
var eyeLOCY = 50;
var eyeCOL = ("#e6dada")

//eye1
fill ("eyeCOL")
ellipse(eyeLOCX,eyeLOCY,70,30) //ball
fill ("#000000")
ellipse(eyeLOCX,eyeLOCY,10,30) //puple 
//eye lash
//make thicker
strokeWeight(4);
line (60,35,60,20)
line (70,35,70,25)
line (50,35,50,25)
line (80,38,80,30)
line (80,38,80,30)
line (40,38,40,30)


//eye2
fill ("eyeCOL")
ellipse(160,150,70,30) //ball
fill ("#000000")
ellipse(160,150,10,30) //puple 



//kiwi
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
