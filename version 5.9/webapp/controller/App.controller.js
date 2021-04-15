//@ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "prokarma/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, Models,ResourceModel) {
        "use strict";

        return Controller.extend("prokarma.SAPUI5.controller.App", {

            onInit: function () {
                //set data model on de view
                this.getView().setModel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new  ResourceModel({bundleName: "prokarma.SAPUI5.i18n.i18n"})
                this.getView().setModel(i18nModel,"i18n")
            },

            mostrarBoton: function () {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model 
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMsg);
            }

        });

    });


