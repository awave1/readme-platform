import { Pool, QueryResult } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default {
  query: (text: string, params: Array<any>) => pool.query(text, params)
}
