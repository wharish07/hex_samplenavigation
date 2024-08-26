sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("test.com.customnavigation.controller.mainpage", {
        onInit: function () {
        },
        onNavToDetail: function() {
            this.getOwnerComponent().getRouter().navTo("Detailpage") 
        }
    });
});
