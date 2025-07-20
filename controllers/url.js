const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function generateNewShortURL(req, res) {
  const body = req.body;
  const redirectURL = req.body.url;
  console.log("body-->", body);
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const availableURL = await URL.findOne({ redirectURL });
  console.log("--create", availableURL);
  if (availableURL && body.url === redirectURL) {
    return res.json({
      message: "URL already exists",
      id: availableURL.shortId,
    });
  }

  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  // return res.json({ id: shortID });
  return res.render("home", {
    id: shortID,
  });
}

async function getRedirectedURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirectURL);
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  generateNewShortURL,
  getRedirectedURL,
  getAnalytics,
};
