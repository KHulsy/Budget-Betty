
function dynamicAjax(fileName , reqType , dataObj , succFunction){ $.ajax({ url: fileName, type: reqType, async: true, data: dataObj, success: succFunction // executes succFunction(data) }); }
