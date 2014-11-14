#The BostonGlobeCharts templates

This set of templates provides a quick, easy, Globe-styled way, to generate basic charts. They can be used as a final produt or as a nice starting point to create something bigger. The set of templates will grow in the coming weeks.

##How to use it

1. Download the zip and you'll have a ready-made <a href="https://github.com/BostonGlobe/generator-globeproject">GlobeGenerator project</a>
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
<a href="http://www.bostonglobe.com/lifestyle/health-wellness/2014/10/22/pew-worry-about-ebola-outbreak-growing/nuUbVnlcKsTWnF0VOcUxmM/story.html">Live example</div>

<img src="https://cloud.githubusercontent.com/assets/2955186/4780725/24b5e498-5c75-11e4-9689-fb3db58114e8.png">

##Feverlines
One or up to five different variables. If you need to use more variables, consult with the graphics depatment, maybe we can think a better way to do it than a fever chart.
<a href="http://www.bostonglobe.com/metro/2014/10/23/baker-pulling-away-from-coakley-new-poll/t1UAIVNm4FWE9i31bf6YTM/story.html">Live example</div>

<img src="https://cloud.githubusercontent.com/assets/2955186/4780728/24bd4fe4-5c75-11e4-8aca-18e8fb0e442c.png">

##Locators
Shows just one location and displays a label for more info by default. Map is zoomable.
<a href="http://www.bostonglobe.com/news/nation/2014/10/24/shooting-reported-high-school-north-seattle/FXh3xUkx4YCoyjYL6G0QxJ/story.html">Live example</div>

<img src="https://cloud.githubusercontent.com/assets/2955186/4780726/24b7ea04-5c75-11e4-84e7-04de34743c46.png">

##Next-Next
Create a simple timeline with texts and  Images (or not) or simply a graphic using step-by-step structure. <a href="http://www.bostonglobe.com/metro/2014/10/27/state-police-warn-southbridge-man-allegedly-national-crime-spree-may-returning-mass/1NC9LuDxatbFkXtFbtTZDL/story.html">Live example</a>

<img src="https://cloud.githubusercontent.com/assets/2955186/4780723/24b39706-5c75-11e4-92f1-7d338698de13.png">

##Dot maps
Create a map with a dot per each location. You can include values for each point to differentiate by size. Map is zoomable.
<a href="http://www.bostonglobe.com/business/2014/10/24/massachusetts-most-expensive-homes-for-sale/Vf99hcnRbD1OYmwIbUE4kI/story.html">Live example</div>

<img src="https://cloud.githubusercontent.com/assets/2955186/4780727/24bcb962-5c75-11e4-82f5-1f400c48ac4a.png">

##Heatmaps
Show the frequency of some data.

<img src="https://cloud.githubusercontent.com/assets/2955186/4780722/24b08f66-5c75-11e4-9cda-9dbfc5bc7446.png">

##States maps
Create a map with data per state. Divided in different customized steps, or creating a choropleth

<img src="https://cloud.githubusercontent.com/assets/2955186/4780724/24b40eca-5c75-11e4-9eca-1e35dedd7525.png">

##Slider animations
Create a series of images and move the slider (or the finger) to go through them. <a href="http://www.bostonglobe.com/2014/04/18/how-biom-prosthetic-ankle-works/bX8vP9ywjVg9oz4Id3QRKI/story.html">Live example</a>

<img src="https://cloud.githubusercontent.com/assets/2955186/4780721/24b03c46-5c75-11e4-976b-81715e3a6dd0.png">

##Stacked barcharts
Create a set of horizontal barcharts withn internal subdivisions.


# Globe generator

This project was generated with [generator-globeproject](https://github.com/BostonGlobe/generator-globeproject). Consult its [README](https://github.com/BostonGlobe/generator-globeproject) for more information.

Please note: do not reproduce Boston Globe logos or fonts without written permission.

## Install

- `npm install`
- `bower install`

## Usage

- `gulp`
