module.exports = {
  apps : [{
    name: 'docker-express-server',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    log: './server-errors.log', //combines standard and error output
    log_type: 'json'
  }]
};
