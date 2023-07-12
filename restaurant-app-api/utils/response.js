exports.sendResponse = (res, codeStatus, content) => {
    res.status(codeStatus);
    res.json(content);
}
