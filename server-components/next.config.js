const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      experimental: {
        runtime: "edge",
        serverComponents: true,
      },
    };
  }

  return {
    /* config options for all phases except development here */
    experimental: {
      runtime: "edge",
      serverComponents: true,
    },
  };
};
