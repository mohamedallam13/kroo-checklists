(function (root, factory) {
    root.BACKEND = factory();
})(this, function () {

    const { SHEETS, Toolkit } = KROOLibraries
    const { timestampCreate } = Toolkit
    const { getSSMan, parseSheet, writeToSheet, createWriteArr } = SHEETS


    const SSID = "11CVLmJDnCj2CdrcGSv0S3llrwtqo4PlpaZfC74jZK8E"

    const SHEET_NAMES = {
        "startup-checklist-form": "Startup Records"
    }

    const sheetParseConfig = {
        headerRow: 2
    }

    function submitChecklist(data) {
        const timestamp = timestampCreate(undefined, "MM/DD/YYYY HH:mm:ss")
        const { formId } = data
        const sheetObj = getSheetObj(formId)
        const writeArray = createWriteArr({ timestamp, ...data }, sheetObj)
        writeToSheet(writeArray, sheetObj)
        return true
    }

    function getSheetObj(formId) {
        const sheetName = SHEET_NAMES[formId]
        const ssMan = getSSMan(SSID, sheetName)
        const sheetObj = parseSheet(ssMan, sheetName, sheetParseConfig)
        return sheetObj
    }

    return {
        submitChecklist
    };
});

function submitChecklist(data) {
    return BACKEND.submitChecklist(data)
}
