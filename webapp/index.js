sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "my_first_app.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});