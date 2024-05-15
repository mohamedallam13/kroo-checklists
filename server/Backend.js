(function (root, factory) {
    root.BACKEND = factory();
})(this, function () {

    const SSID = "11CVLmJDnCj2CdrcGSv0S3llrwtqo4PlpaZfC74jZK8E"

    const SHEET_NAMES = {
        "startup-checklist-form": "Startup Records"
    }

    function submitChecklist(data) {
        const { formId } = data
        const sheet = getSheet(formId)

        return true
    }

    function getSheet(formId) {

    }

    return {
        submitChecklist
    };
});

function submitChecklist(data) {
    return BACKEND.submitChecklist(data)
}
