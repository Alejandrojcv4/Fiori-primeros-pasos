sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], (Button, MessageToast) => {
	"use strict";

	new Button({
		text: "Press me",
		press: function () {
			MessageToast.show("You did it!");
		}
	}).placeAt("content");

});