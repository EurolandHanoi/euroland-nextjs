const path = require("path");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false, dir: path.join(__dirname) });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, () => {
      console.log(`> Ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start Next.js server:", err);
    process.exit(1);
  });
