R:

	Rscript -e "rmarkdown::render('data/newtemplates.Rmd')"
	open data/newtemplates.html

R_deploy:

	cp data/newtemplates.html /Volumes/www_html/multimedia/graphics/projectFiles/Rmd/
	rsync -rv data/newtemplates_files /Volumes/www_html/multimedia/graphics/projectFiles/Rmd
	open http://private.boston.com/multimedia/graphics/projectFiles/Rmd/newtemplates.html