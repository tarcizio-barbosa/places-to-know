import { Connection, getConnectionOptions, createConnection } from "typeorm";

export default async (host = "localhost"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host,
      database:
        process.env.NODE_ENV === "test" ? "ptk_test" : defaultOptions.database,
    })
  );
};
