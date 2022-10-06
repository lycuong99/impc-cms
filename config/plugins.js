module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
  "import-export-entries": {
    enabled: true,
  },
});
