import { Pool, QueryResult } from 'pg'

const pool = new Pool({
  user: 'awave',
  host: 'localhost',
  database: 'readme',
  password: 'password',
  port: 5432,
})

export default {
  query: (text: string, params: Array<any>) => pool.query(text, params)
}
