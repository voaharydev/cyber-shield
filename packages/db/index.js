'use strict';

const generated = require('./src/generated/index.js');

const globalForPrisma = globalThis;

function createPrismaClient() {
  return new generated.PrismaClient();
}

const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

module.exports = {
  ...generated,
  prisma,
  createPrismaClient,
};
