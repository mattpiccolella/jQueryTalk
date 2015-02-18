Leveling Up Your Apps with jQuery
=====================================

[learn.adicu.com/jquery](http://learn.adicu.com/jquery)

Learn to program in JavaScript with jQuery!  This curriculum is designed to be accesible to anyone who has programmed in at least on language, and is interested in learning to program in JavaScript and jQuery.


#### Building

Run the following in the root directory:

    ./build.sh

This generates `.html` files to be viewed in a browser.

### Deploying

Run the following command to deploy to [learn.adicu.com/jquery](http://learn.adicu.com/jquery) (requires SCP and access to adi-website on SSH):

    ./deploy.sh

#### Sample Code

All sample code is available by section in the `code/` folder, or at [learn.adicu.com/jquery/code.zip](http://learn.adicu.com/jquery/code.zip).

#### Using Vagrant

We support running with vagrant!  [Install and setup Vagrant](https://docs.vagrantup.com/v2/installation/index.html), and then:

    $ vagrant up # launches the box
    $ vagrant ssh # ssh into the box
    # You are now in the vagrant instance
    $ cd /vagrant # go to the code
    $ cd <solutions folder> # Ex: cd webdev-solutions/1.3.2\ Dynamic\ Routes
    # Run the solution # Ex: python app.py

#### Directory Structure

##### build/

This is where all the extra files needed to convert from markdown to HTML go. `build.sh` uses the files from this folder.
