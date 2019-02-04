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
    error_file: './logs/server-error.log',
    out_file: './logs/server-output.log',
    log_type: 'json'
  }]
};
