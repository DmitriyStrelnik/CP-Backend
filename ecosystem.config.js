module.exports = {
  apps : [{
    script: 'index.js',
    watch: true,
    port: 3000,
    env: {
        NODE_ENV: 'development',
      },
    env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
