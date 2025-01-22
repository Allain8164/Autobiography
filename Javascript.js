(function () {
    function GameLoader() {
      this.init = function () {
        this._gameId = "566a3a6a293f464299216a53166aa2d7";
        this._container = document.getElementById("game");
        this._loader = this._getLoaderData();
        this._hasImpression = false;
        this._hasSuccess = false;
        this._insertGameSDK();
        this._softgamesDomains = this._getDomainData();
      };

      this._getLoaderData = function () {
        return {"enabled":true,"sdk_version":"1.15.2"};
      }

      this._getDomainData = function(){
        return [{"name":"minigame.aeriagames.jp","id":4217},{"name":"localhost:8080","id":4217},{"name":"minigame-stg.aeriagames.jp","id":4217}];
      }

      this._insertGameSDK = function () {
        if (!this._gameId) return;

        window["GD_OPTIONS"] = {
          gameId: this._gameId,
          loader: this._loader,
          onLoaderEvent: this._onLoaderEvent.bind(this),
          onEvent: this._onEvent.bind(this)
        };

        (function (d, s, id) {
          var js,fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://html5.api.gamedistribution.com/main.min.js";
          fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "gamedistribution-jssdk");
      };

      this._loadGame = function (options) {

        if (this._container_initialized) {
          return;
        }

        var formatTokenURLSearch = this._bridge.exports.formatTokenURLSearch;
        var extendUrlQuery = this._bridge.exports.extendUrlQuery;
        var base64Encode = this._bridge.exports.base64Encode;
        const ln_param = new URLSearchParams(window.location.search).get('lang');

        var data = {
          parentURL: this._bridge.parentURL,
          parentDomain: this._bridge.parentDomain,
          topDomain: this._bridge.topDomain,
          hasImpression: options.hasImpression,
          loaderEnabled: true,
          host: window.location.hostname,
          version: "1.5.17"
        };

        var searchPart = formatTokenURLSearch(data);
        var gameSrc = "//html5.gamedistribution.com/rvvASMiM/566a3a6a293f464299216a53166aa2d7/index.html" + searchPart;
        this._container.src = gameSrc;

        this._container.onload = this._onFrameLoaded.bind(this);

        this._container_initialized = true;
      };

      this._onLoaderEvent = function (event) {
        switch (event.name) {
          case "LOADER_DATA":
            this._bridge = event.message.bridge;
            this._game = event.message.game;
            break;
        }
      };

      this._onEvent = function (event) {
        switch (event.name) {
          case "SDK_GAME_START":
            this._bridge && this._loadGame({hasImpression: this._hasImpression});
            break;
          case "AD_ERROR":
          case "AD_SDK_CANCELED":
            this._hasImpression = false || this._hasSuccess;
            break;
          case "ALL_ADS_COMPLETED":
          case "COMPLETE":
          case "USER_CLOSE":
          case "SKIPPED":
            this._hasImpression = true;
            this._hasSuccess = true;
            break;
        }
      };

      this._onFrameLoaded=function(event){
        var container=this._container;
        setTimeout(function(){
          try{
            container.contentWindow.focus();
          }catch(err){
          }
        },100);
      }
    }
    new GameLoader().init();
  })();