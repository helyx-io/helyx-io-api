////////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////////

var appName = 'helyx.io';

var db = {
	dialect: 'pg',
	database: process.env.DB_DATABASE || 'helyx',
	host: process.env.DB_HOSTNAME || 'localhost',
	port: process.env.DB_PORT || 5432,
	username: process.env.DB_USERNAME || 'helyx',
	password: process.env.DB_PASSWORD || 'helyx',
	pool: {
		min: process.env.DB_POOL_MIN || 0,
		max: process.env.DB_POOL_MAX || 256
	}
};

db.url = `${db.dialect}://${db.username}:${db.password}@${db.host}:${db.port}/${db.database}?sslmode=disable`;

var env = process.env.NODE_ENV || 'development';

module.exports = {
	env: process.env.NODE_ENV || 'development',
	scheme: process.env.APP_SCHEME || 'http',
	host: process.env.APP_HOST || 'localhost',
	port: process.env.APP_PORT || process.env.PORT || 9000,
	appname: appName,
	auth: {
		admin: (process.env.AUTH_ADMIN || 'alexis.kinsella@gmail.com').split(','),
		google: {
			clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
			clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
			callbackUrl: process.env.AUTH_GOOGLE_CALLBACK_URL || 'http://localhost'
		}
	},
	logger: {
		threshold: process.env.LOGGER_THRESHOLD_LEVEL || 'debug',
		console: {
			level: process.env.LOGGER_CONSOLE_LEVEL || 'debug'
		},
		file: {
			level: process.env.LOGGER_FILE_LEVEL || 'debug',
			directory: process.env.LOGGER_FILE_DIRECTORY || 'logs',
			filename: process.env.LOGGER_FILE_FILENAME || ("" + appName + "/logs.log")
		}
	},
	admin: {
		username: process.env.ADMIN_USERNAME || 'admin',
		password: process.env.ADMIN_PASSWORD || 'admin'
	},
	service: {
		helyx: {
			baseURL: process.env.GTFS_API_BASE_URL || "http://localhost:4000"
		}
	},
	email: {
		enabledProviders: (process.env.ENABLED_EMAIL_PROVIDERS || 'mandrill').split(','),
			mandrill: {
			apiKey: process.env.MANDRILL_API_KEY,
				from: process.env.MANDRILL_FROM || 'contact@helyx.io'
		},
		mailgun: {
			apiKey: process.env.MAILGUN_API_KEY,
				domain: process.env.MAILGUN_DOMAIN,
				from: process.env.MAILGUN_FROM || 'contact@helyx.io'
		},
		sendgrid: {
			apiUser: process.env.SENDGRID_API_USER,
				apiKey: process.env.SENDGRID_API_KEY,
				from: process.env.SEND_GRID_FROM || 'contact@helyx.io'
		},
		smtp: {
			host: process.env.SMTP_HOST,
				port: process.env.SMTP_PORT,
				user: process.env.SMTP_USER,
				password: process.env.SMTP_PASSWORD,
				from: process.env.SMTP_FROM
		}
	},
	redis: {
		host: process.env.REDIS_HOST || process.env.SSDB_PORT_8888_TCP_ADDR || 'localhost',
		port: process.env.REDIS_PORT || process.env.SSDB_PORT_8888_TCP_PORT || 8888
	},
	apns: {
		enabled: process.env.APNS_ENABLED == "true",
		sandboxEnabled: process.env.APNS_SANDBOX_ENABLED == "true",
		certFile: process.env.APNS_CERT_FILE || `${__dirname}/../certs/apns/debug/apnagent-dev-cert.pem`,
		keyFile: process.env.APNS_KEY_FILE || `${__dirname}/../certs/apns/debug/apnagent-dev-key.pem`
	},
	db: db,
	monitoring: {
		newrelic: {
			apiKey: process.env.NEW_RELIC_API_KEY,
			appName: process.env.NEW_RELIC_APP_NAME || 'helyx-webapp'
		}
	}
};