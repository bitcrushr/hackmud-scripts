function(context, args){
  if(args){
    switch(args.Dir){
      case "/offers":
        return    `\n
                  -\n
                  I'm available to script for both individuals and corporations.\n
                  If you're interested, contact me via Discord DM with an offer.\n
                  I'm willing to try any type of project, at a reasonable price.\n
                  -`
      case "/contact":
        return    `\n
                  -\n
                  Steam: "Bit"\n
                  HackMUD Discord: "null"\n
                  Feel free to message me on either platform.\n
                  -`
      default:
        return    `\n
                  -\n
                  Please select one of the listed directories.\n
                  -`
    }
  } else {
    return `\n-\n      @@@                                 @@@
     @@@  @@@  @@@  @@@@@@ @@@@@@@       @@@  @@@@@@@   @@@@@@  @@@@@@@ @@@  @@@@@@   @@@@@@ @@@  @@@
    @@@   @@!  @@@ !@@     @@!  @@@     @@@   @@!  @@@ @@!  @@@   @!!   @@! @@!  @@@ !@@     @@!  @@@
   !!@    @!@  !@!  !@@!!  @!@!!@!     !!@    @!@!!@!  @!@!@!@!   @!!   !!@ @!@!@!@!  !@@!!  @!@  !@!
  !!!     !!:  !!!     !:! !!: :!!    !!!     !!: :!!  !!:  !!!   !!:   !!: !!:  !!!     !:! !!:  !!!
 :!:       :.:: :  ::.: :   :   : :  :!:       :   : :  :   : :    :    :    :   : : ::.: :   :.:: :
: :                                 : :

         @@@  @@@  @@@ @@@@@@@@  @@@@@@  @@@  @@@ @@@@@@@@ @@@@@@@
         @@!  @@!  @@! @@!      @@!  @@@ @@!  @@@ @@!      @@!  @@@
         @!!  !!@  @!@ @!!!:!   @!@!@!@! @!@  !@! @!!!:!   @!@!!@!
          !:  !!:  !!  !!:      !!:  !!!  !: .:!  !!:      !!: :!!
           ::.:  :::   : :: ::   :   : :    ::    : :: ::   :   : :

           Just your average HackMUD player - Currently accepting offers

   Use Dir:\"/offers\" || Dir:\"/contact\" for more information.\n-`
  }
}
