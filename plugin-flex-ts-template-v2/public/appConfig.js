var appConfig = {
  pluginService: {
    enabled: true,
    url: '/plugins',
  },
  insights: {
    analyticsUrl: 'http://localhost:8081',
  },
  ytica: false,
  logLevel: 'info',
  showSupervisorDesktopView: true,
  custom_data: {
    serverless_functions_protocol: 'http',
    serverless_functions_port: '3001',
    serverless_functions_domain: 'localhost',
    common: {},
    features: {
      "teams_view_filters": {
        "enabled": true,
        "log_filters": false,
        "applied_filters": {
          "activities": true,
          "email": true,
          "department" : true,
          "queue_no_worker_data": true,
          "queue_worker_data": true,
          "team": true,
          "agent_skills": true
        }
      }
    },
  },
};
