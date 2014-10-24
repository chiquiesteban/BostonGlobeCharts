#The BostonGlobeCharts templates

This set of templates provides a quick, easy, Globe-styled way, to generate basic charts. They can be used as a final produt or as a nice starting point to create something bigger.

##How to use it

1. Download the zip and you'll have a ready-made GlobeGenerator project
2. You can open the project with Sublime (Open project, look for globegraphic.sublime-project), there will be folders on the left side of the interface to access the different templates.
3. Access it in the Terminal
4. Write `gulp` and enter
5. If it doesn't work, you will probably have to run `sudo npm install`
6. After the gulp, you will see a list of templates. Select the one you want to see and it will open a live server where you'll be able to see your advances.
7. For basic charts, the only files you need to change are js/utils.js (for the data) and html/graphic.html (Headline, subtitle, source...)
8. Once you're ready, stop the server in the Terminal using ctrl+c
9. Gulp again, and select 'yes' when asked if you want to compile a JPT
10. You'll see how a file called PROD.jpt is updated. Its content is the only thing you'll need to upload to Workbench.

# The templates

##Horizontal Bar Chart
Just a regular bar chart. With the  possibility to highlight one value.
##Feverlines
One or up to five different variables. If you need to use more variables, consult with the graphics depatment, maybe we can think a better way to do it than a fever chart.
##Locators
Shows just one location and displays a label for more info by default. Map is zoomable.
##Next-Next
Create a simple timeline with texts and  Images (or not) or simply a graphic using step-by-step structure.
##Dot maps
Create a map with a dot per each location. You can include values for each point to differentiate by size. Map is zoomable.
##Heatmaps
Show the frequency of some data.
##States maps
Create a map with data per state. Divided in different customized steps, or creating a choropleth
##Slider animations
Create a series of images and move the slider (or the finger) to go through them.

# Globe generator

This project was generated with [generator-globeproject](https://github.com/BostonGlobe/generator-globeproject). Consult its [README](https://github.com/BostonGlobe/generator-globeproject) for more information.

Please note: do not reproduce Boston Globe logos or fonts without written permission.

## Install

- `npm install`
- `bower install`

## Usage

- `gulp`
