Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items: { html:'My first rally App only prints this message (and one more in log).' },
    launch: function() {
        //Write app code here
        console.log("First App Deployed In Rally-App-Builder created by JCMP");
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    }
});