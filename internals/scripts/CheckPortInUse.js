import detectPort from "detect-port";

(function() {
  const port = process.env.PORT || "1212";

  detectPort(port, (err, availablePort) => {
    if (port !== String(availablePort)) {
      throw new Error(`Port ${port} already in use. Use another port.`);
    }

    process.exit(0);
  });
})();
