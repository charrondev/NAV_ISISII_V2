// build new outline based on the values of the cookie
// and data points in the outline data array.
// This fires each time the user clicks on a control,
// because the HREF for each one reloads the current document.
let newOutline = ""
let prevIndentDisplayed = 0
let showMyDaughter = 0
// cycle through each entry in the outline array
for (let i = 1; i < db.length; i++) {
    const theGIF = getGIF(i)				// get the image
    const theGIFStatus = getGIFStatus(i)  // get the status message
    const currIndent = db[i].indent		// get the indent level
    const expanded = getCurrState().charAt(i - 1) // current state
    db[i].currentrow = ""

    if (currIndent === 0 || 
        currIndent === 1 || 
        db[i].currentrow === "currentrow" || 
        currIndent <= prevIndentDisplayed || 
        (showMyDaughter === 1 && (currIndent - prevIndentDisplayed === 1))) {
        
        // Phil added the if to remove the image from before the root element
        if (currIndent !== 0) {
            newOutline += "<span class=\"" + db[i].currentrow + "\" style=\" position:relative;left:" + (indentPixels * currIndent) + "px;width:200px\"><A HREF=\"javascript:history.go(0)\" onMouseOver=\"window.status=\'" + theGIFStatus + "\';return true;\" onClick=\"toggle(" + i + ");return " + "\">"
            newOutline += "<img ALIGN=TOP SRC=\"" + theGIF + "\" HEIGHT=" + widgetHeight + " WIDTH=" + widgetWidth + "></A>"
            newOutline += "<span title=\"" + db[i].display + "\" style=\"width:" + (200 - widgetWidth) + "px\">"
        }
        if (db[i].link === "" || db[i].link == null) {
            newOutline += " <font size='1'>" + db[i].display + "</font></span></span>" + "<BR>"	// no link, just a listed item
        } else {
            if (db[i].occurances > 0) {
                newOutline += " <A HREF=\"" + db[i].URL + "\" TARGET=\"" + displayTarget + "\" onMouseOver=\"window.status=\'" + db[i].statusMsg + "\';return true;\"><font size='1'>" + db[i].display + "&nbsp;&nbsp;(" + db[i].occurances + ")</font></A></span></span><BR>"
            } else {
                newOutline += " <A HREF=\"" + db[i].URL + "\" TARGET=\"" + displayTarget + "\" onMouseOver=\"window.status=\'" + db[i].statusMsg + "\';return true;\"><font size='1'>" + db[i].display + "</font></A></span></span><BR>"
            }
        }
        prevIndentDisplayed = currIndent
        showMyDaughter = expanded
        if (db.length > 25) {
            document.write(newOutline)
            newOutline = ""
        }
    }
}
document.write(newOutline)


