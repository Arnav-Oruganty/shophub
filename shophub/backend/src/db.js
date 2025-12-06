import sqlite3pkg from "sqlite3";
import { open } from "sqlite";

const sqlite3 = sqlite3pkg.verbose();

export async function createDB() {
  return open({
    filename: "./database/shop.db",
    driver: sqlite3.Database,
  });
}
