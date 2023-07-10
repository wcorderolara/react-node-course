exports.sendResponse = (res, statusCode, content) => {
    res.status(statusCode);
    res.json(content);
}
