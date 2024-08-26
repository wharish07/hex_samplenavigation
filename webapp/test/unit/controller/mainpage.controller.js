/*global QUnit*/

sap.ui.define([
	"testcom/customnavigation/controller/mainpage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mainpage Controller");

	QUnit.test("I should test the mainpage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
