module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: 'AKIAQYBS7WQVIKA4MLMC',
      secretAccessKey: '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',
      region: 'us-west-1',
      params: {
        Bucket: 'game-ecommerce-432',
      },
      // cdnUrl: env("CDN_URL")
    },
  },
});
