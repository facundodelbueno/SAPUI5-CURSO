//@ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "prokarma/SAPUI5/model/Models"
],
    /**
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, Models) {
        "use strict";

        return Controller.extend("prokarma.SAPUI5.controller.App", {

            onInit: function () {
                this.getView().setModel(Models.createRecipient());
            },

            mostrarBoton: function () {
                MessageToast.show("Boton Presiondo");
            }

        });

    });


