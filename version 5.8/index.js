//@ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/XMLView"
    /**
     * 
     * @param {typeof sap.ui.core.mvc.XMLView} XMLView
     */
], function (XMLView) {
    "use strict";
    XMLView.create({
        viewName : "Invoices.SAPUI5.view.App"
    }).then(function(oView){
        oView.placeAt("content");
    });
});
