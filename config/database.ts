
import path from 'path';

export default ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    // Production database configuration
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
          },
        },
        pool: {
          min: env.int('DATABASE_POOL_MIN', 2),
          max: env.int('DATABASE_POOL_MAX', 10),
        },
      },
    };
  }

  // Development database configuration
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(
          __dirname,
          '..',
          '..',
          env('DATABASE_FILENAME', '.tmp/data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };
};
