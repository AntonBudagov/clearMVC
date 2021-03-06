'use strict';
(function(){

    var model = function() {

        var a = [];

        function getData() {
            return $.get( "js/data.json", function( data ) {
                console.log("Initial data is loaded");
                return data;
            })
        }

        function saveData(item) {
            console.log("Data successfuly saved: ");
            console.log(item);
        }

        function updateData(data) {
            console.log("Data successfuly updated: " + data.counter);
            console.log(data);
        }

        return {
            getData : getData,
            saveData: saveData,
            updateData: updateData
        }
    }

    window.app = window.app || {};
    window.app.model = model();



}())
