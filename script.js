var videolink =
  "https://www.videosprofitnetwork.com/watch.xml?key=02b9b36cfb2cdb674a4fa89a1aa1ed7c";
var lnn = lnn || {};
lnn.adcount = 0;
lnn.vastplayer = function() {
  lnn.options = {
    layoutControls: {
      allowDownload: false,
      allowTheatre: false,
      autoPlay: true,
      controlBar: {
        autoHide: true,
        autoHideTimeout: 0,
        animated: false
      },
      doubleclickFullscreen: false,
      fillToContainer: true,
      htmlOnPauseBlock: {
        html: null,
        height: null,
        width: null
      },
      keyboardControl: false,
      layout: "",
      logo: {
        imageUrl:
          "https://uploads-ssl.webflow.com/5da781331482aebe6f8aecf6/5e05452a0aa5296d6b7cf4d6_LocalNewsCircle_32x32.png",
        position: "top right",
        clickUrl: "https://durangolocal.news",
        opacity: 0,
        mouseOverImageUrl:
          "https://uploads-ssl.webflow.com/5da781331482aebe6f8aecf6/5e05452a0aa5296d6b7cf4d6_LocalNewsCircle_32x32.png",
        imageMargin: "0px",
        hideWithControls: true,
        showOverAds: false
      },
      loop: true,
      mute: true,
      primaryColor: false,
      posterImage: false,
      preload: false,
      playButtonShowing: false,
      playPauseAnimation: false,
      subtitlesEnabled: false,
      playbackRateEnabled: false,
      playerInitCallback: function() {
        console.log("LNN PLAYER LOADED playerInitCallback");
        playerLoaded();
      }
    },
    vastOptions: {
      skipButtonCaption: "",
      skipButtonClickCaption: "",
      adTextPosition: "top right",
      adCTAText: "Visit now!",
      adCTATextPosition: "bottom right",
      vastTimeout: 1000,
      showPlayButton: false,
      maxAllowedVastTagRedirects: 0,
      adList: [
        {
          roll: "preRoll",
          vastTag: videolink,
          adText: "https://www.videosprofitnetwork.com/watch.xml?key=02b9b36cfb2cdb674a4fa89a1aa1ed7c"
        },
        {
          roll: "preRoll",
          vastTag: videolink,
          adText: "https://www.videosprofitnetwork.com/watch.xml?key=02b9b36cfb2cdb674a4fa89a1aa1ed7c"
        }
      ],

      vastAdvanced: {
        vastLoadedCallback: function() {
          lnn.lnnFluidPlayer.loop = true;
          var ad = lnn.lnnFluidPlayer.adList; //
          console.log("AD LOADED - vastLoadedCallback");
          console.log(ad);
        },
        noVastVideoCallback: function() {
          lnn.lnnFluidPlayer.loop = true;
        },
        vastVideoSkippedCallback: function() {
          lnn.lnnFluidPlayer.loop = true;
        },
        vastVideoEndedCallback: function() {
          console.log("AD ENDED - vastVideoEndedCallback");
          console.log(JSON.stringify(lnn.lnnFluidPlayer.adList));
          lnn.lnnFluidPlayer.loop = true;
          console.log("VAST VIDEO ENDED, RESTARTING...");
          lnn.lnnFluidPlayer.init("my-video",lnn.options); //
          lnn.lnnFluidPlayer.play();
        }
        /*                  vastLoadedCallback:       (function() {}),
                  noVastVideoCallback:      (function() {}),
                  vastVideoSkippedCallback: (function() {}),
                  vastVideoEndedCallback:   (function() {
                  	console.log("VAST VIDEO ENDED, RESTARTING...");
                    lnn.lnnFluidPlayer.pause();
                    lnn.vastplayer();
                  })*/
      }
    }
  };
  lnn.lnnFluidPlayer = fluidPlayer("my-video", lnn.options);
  lnn.lnnFluidPlayer.on("playing", function() {
    console.log("Video is now playing: " + lnn.adcount++);
    //window['ID'+lnn.adcount] = lnn.lnnFluidPlayer.adList.ID0;
    //window['ID'+lnn.adcount].id = 'ID'+lnn.adcount;
    //window['ID'+lnn.adcount].played = false;
    //window['ID'+lnn.adcount].played = false;
    //lnn.lnnFluidPlayer.adList['ID'+lnn.adcount] = window['ID'+lnn.adcount];
   // lnn.lnnFluidPlayer.adList['ID'+lnn.adcount]['id'] = 'ID'+lnn.adcount;
    //lnn.lnnFluidPlayer.displayOptions.vastOptions.adList[lnn.adcount] = lnn.lnnFluidPlayer.displayOptions.vastOptions.adList[lnn.adcount-1];
    console.log("AD PLAYING - lnn.lnnFluidPlayer.on - lnn.lnnFluidPlayer.adList");
    console.log(lnn.lnnFluidPlayer.adList);
    console.log("AD PLAYING - lnn.lnnFluidPlayer.on - lnn.lnnFluidPlayer.displayOptions.vastOptions.adList");
    console.log(lnn.lnnFluidPlayer.displayOptions.vastOptions.adList);
    //lnn.lnnFluidPlayer.setVastList();
    console.log("AD PLAYING 2 - lnn.lnnFluidPlayer.on");
    console.log(lnn.lnnFluidPlayer.adList);
    //lnn.lnnFluidPlayer.init();
    lnn.lnnFluidPlayer.firstPlayLaunched = false;
     //lnn.lnnFluidPlayer.adList.ID0.played = false;
    lnn.lnnFluidPlayer.play();
  });
  lnn.lnnFluidPlayer.displayOptions.vastOptions.adList = [
        {
            roll: "preRoll", 
            vastTag: videolink
        }
    ];
    //lnn.lnnFluidPlayer.setVastList();
  lnn.lnnFluidPlayer.play();
  function playerLoaded() {
    console.log("playerLoaded CALLBACK CALLED");
    document.getElementById("volume-up").onclick = function() {
      document.getElementById("volume-up").style.display = "none";
      document.getElementById("volume-mute").style.display = "block";
      lnn.lnnFluidPlayer.setVolume(0);
      console.log("set volume to 0");
    };
    document.getElementById("volume-mute").onclick = function() {
      document.getElementById("volume-mute").style.display = "none";
      document.getElementById("volume-up").style.display = "block";
      lnn.lnnFluidPlayer.setVolume(1);
      console.log("set volume to 1");
    };
  } //playerloaded()
}; //lnn.vastplayer()
lnn.vastplayer();