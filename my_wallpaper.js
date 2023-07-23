//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
   pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  ellipse(100, 100, 60, 60); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
  ellipse(80, 80, 40, 40);//head 
  ellipse(85, 80, 5, 5); // eye

  line(70,85,50,100) //beek 

  line(100, 130, 100, 150) //leg
  line(90, 150, 100, 150)



}
