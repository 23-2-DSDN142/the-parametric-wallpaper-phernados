//your parameter variables go here!
//eye
var eyeNo = (true)
var eyeLOCX = 50;
var eyeLOCY = 10;
var eyeCOL = ("#000000")
// colour options #e6dada,#000000
var eyeLINE =("#ffffff")
// colour options #733E29, #ffffff, #000000
var eyeSIZE = (4)
var eyeLOCX2 = 50
var eyeLOCY2 = 150

//rainbow 
var rainSIZE = 3
var COL1 = ("#ED6A5A") // colour options #285943, #ED6A5A
var COL2 = ("#F4F1BB") // colour options #EDD4B2, #F4F1BB
var COL3 = ("#9BC1BC") // colour options #2E294E, #9BC1BC
var COL4 = ("#5CA4A9") // colour options #F0386B, #5CA4A9
var COL5 = ("#E6EBE0") // colour options #1B998B, #E6EBE0



function setup_wallpaper(pWallpaper) {
   pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print
 
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}



function wallpaper_background() {
  background("#000000"); //space colour
  // colour options #7e95ab, #000000
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//eye1 
if (eyeNo){
  draweye1(150, 220)
  }

//rainbow 
strokeWeight (rainSIZE) 
//line
stroke(COL1)
line (130,0,130,80)
line (130,80,30,80)
line (30,80,30,200)
//line

stroke(COL2)
line (140,0,140,90)
line (140,90,40,90)
line (40,90,40,200)
//line 
stroke(COL3)
line (150,0,150,100)
line (150,100,50,100)
line (50,100,50,200)
//line 
stroke(COL4)
line (160,0,160,110)
line (160,110,60,110)
line (60,110,60,200)
//line 
// colour options #1B998B, #E6EBE0
stroke(COL5)
line (170,0,170,120)
line (170,120,70,120)
line (70,120,70,200)


//eye2
strokeWeight (2)
stroke (eyeLINE)
fill (eyeCOL)
ellipse(eyeLOCX2,eyeLOCY2,70,30) //ball
fill (eyeLINE)
ellipse(eyeLOCX2,eyeLOCY2,10,30) //puple 
strokeWeight(eyeSIZE);



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
line (x,y-15,x,y-30)
line (x+10,y-15,x+10,y-25)
line (x-10,y-15,x-10,y-25)
line (x+20,y-12,x+20,y-20)
line (x-20,y-12,x-20,y-20)

}