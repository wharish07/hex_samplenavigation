sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("test.com.customnavigation.controller.SecondPage", {
        onInit: function () {

        },
        onNavToMain: function() {
          this.getOwnerComponent().getRouter().navTo("Routemainpage")  
        }
    });
});
