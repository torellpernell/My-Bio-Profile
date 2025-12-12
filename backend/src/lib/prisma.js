import { PrismaMssql } from "@prisma/adapter-mssql";
import { PrismaClient } from "@prisma/client";

const config = {
  server: "localhost",
  port: 1433,
  database: "DevLogs",
  user: "tpernell@icstars.org",
  password: "Dad022679!",
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Use this if you're using self-signed certificates
  },
};

const adapter = new PrismaMssql(config);
export const prisma = new PrismaClient({ adapter });
