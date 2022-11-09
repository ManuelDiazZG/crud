sap.ui.define([], function () {

    function dateFormat(date) {
        var timeDay= 24 * 60 * 60 * 1000;


        if (date) {
            var dateNow = new Date();
            var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "yyyy/MM/dd" });
            var dateNowFormat = new Date(dateFormat.format(dateNow));
            const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            var txtToday = oResourceBundle.getText("today");
            var txtTomorrow = oResourceBundle.getText("tomorrow");
            var txtYesterday = oResourceBundle.getText("yesterday");

            switch (true) {
                //Today
                case date.getTime() === dateNowFormat.getTime():
                    return txtToday;  //i18nBundle.getText("today")
                //Tomorrow
                case date.getTime() === dateNowFormat.getTime() + timeDay:
                    return txtTomorrow;
                //Yesterday
                case date.getTime() === dateNowFormat.getTime() - timeDay:
                    return txtYesterday;
                default:
                return "";
            }

        }
    }
    return {
        dateFormat: dateFormat
    };
});