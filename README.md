# Crossplatform HTML5 app
### Author(s): Dave Voyles | [@DaveVoyles](http://www.twitter.com/DaveVoyles)
### URL: [www.DavidVoyles.wordpress.com][1]

----------
### Objective

This lab goes through the process of packaging up the (insert the application and link to walk through) as an app store installable package for (PICK A PLATFORM). With these tools you can write an application that works for iOS, Andriod and Windows Phone/8.

By the end of this lab you will be able to:

- Understand how to test an application on an Emulator
- Debug an application running in an emulator
- Package an application for iOS and Andriod
 
### Description
This open source HTML5 app was written using Cordova 3.5, and runs on all modern mobile devices. (Please add more detail on what the app does, technolgies used and ideally a link to another walk-through on how to make this web app).

[Cordova](http://cordova.apache.org/) is an open source project that allows developers to talk to the native controls and functions of a device through the web browser. **Example:** Use your browser to access the phone's accelerometer, gyro, or camera.

With the [Intel XDK](http://xdk-software.intel.com/), you can write for, test, and deploy to many devices without having to ever install Visual Studio xCode, or Eclipse.

Use this as a template to get started with your own application. Remove some bits of code, and add your own. 


### Features
 - Runs on Win8, Win Phone 8, iOS, Android, & Browsers
 - [jQuery](http://jquerymobile.com/) mobile for speed and navigation between pages
 - [Bootstrap](http://getbootstrap.com) for responsive web design
 - [Single page application](http://en.wikipedia.org/wiki/Single-page_application)
 - No need for multiple IDEs 
 - Emulating and testing of dozens of deviecs from within the IDE
 - Deploy to your phone with one click

###Requirements
- You can use any Cordova tool for this, but I prefer the [Intel XDK](http://xdk-software.intel.com/), as it works on a Mac or Windows. 
- PC or Mac


### Setup

 1.  Download the source [from GitHub][3]
 2.  Unzip the folder, and put the *Ska-Studios* folder on your desktop, NOT the *Xplatform-master* folder.
 (add screenshot here)
 3.  Download & install the [Intel XDK](http://xdk-software.intel.com/)
 3.  In the top-right corner, log-in or create a new Intel account.
 (add screenshot here)
 4.  On your phone, download the **Intel App Preview** app from your device's marketplace *(Apple App Store, Google Play, Windows Store).*

### Opening the project
 3. Launch the XDK. In the top-left corner, look for *Projects -> New Project*
 (add screenshot here)
 4. Click on *Import an Existing App*
 (add screenshot here)
 5. Open the Ska-Studios folder on your desktop
 6. Name the project
 (add screenshot here)
 7. You will now have a working project to build from. Start with Index.html

### Emulating the app in other devices
1. With your code open, on the top of the screen look for the Emulate tab 
(add screenshot here)
2. Check the device type in the top-left corner to change for the device you want to test on
(add screenshot here)

### Debugging the app on a physical device
1.  With the IDE open, click on the **TEST** Tab on the top of the screen
(add screenshot here)
2.  You will be asked to sync with the server. Click *Sync.*
(add screenshot here)
3.  Scan the QR code on your computer, using your phone. This will automatically open the Intel App on your phone, and point it towards the URL that your app is hosted at.
(add screenshot here)
4. Give it a few moments to open the app, download your file, and open the file.

### Building for a device
1. With the IDE open, click on the **BUILD** tab
(add screenshot here)
2. Select the device that you want to build for
(add screenshot here)
3. Follow the instructions for each platform, and include the appropriate image sizes
(PICK A PLATFORM TO WALK THROUGH)

----------

##FAQ
**Why do I need to create an account?**

Your app is stored locally on your own machine, as well as Intel's servers. When you deploy your app to a physical device, it is connecting via a URL, which is a link to your app on Intel's servers.


**When I try to open an external web page (ie - one that I did not write), a new window pops up within emulator.**

This is a bug. On your physical device, it will load within your application. On the emulator though, it creates a new window.

**What is the purpose of the Intel App Preview app?**

This creates a debug container which points to your app stored on Intel's servers, and is used for testing. 

**There is so much JavaScript -- where do I start?**

The only .js file that I had to write for this project was *ska.js*. It's very well documented. Make any changes that you need in there. 


**Who is Ska Studios?**

Some friends in Seattle who make awesome video games. [Check out their titles](http://ska-studios.com/) on XBLA and XBLIG, as well as their upcoming game Salt and Sanctuary on PS4.

----------
## Resources

- [Power Point: How to build cross platform mobile apps](http://davevoyles.azurewebsites.net/speaking-engagements-power-points/)
- [BizSpark, for free MSFT dev licenses and web hosting](http://davevoyles.azurewebsites.net/bizspark-free-software-cloud-services-o/)
- [Windows store image generator](http://wat-docs.azurewebsites.net/Tools)
- [E-mail me with questions](mailto:Dvoyles@microsoft.com "Dvoyles@microsoft.com")
- [ jQuery mobile documentation](http://api.jquerymobile.com/)

----------

##Change Log
###v1.0.0
Initial build of the app


  [1]: http://www.davidvoyles.wordpress.com "My website "
  [2]: http://xdk-software.intel.com/
  [3]: https://github.com/DaveVoyles/Ska-Studios-Xplatform
