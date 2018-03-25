import { Pool, QueryResult, types } from 'pg'
import moment from 'moment'

const TIMESTAMP_ID = 1114

const pool = new Pool({
  host: 'ec2-174-129-28-38.compute-1.amazonaws.com',
  database: 'dbv3i1iupv537o',
  user: 'khzwzrctmoxxwv',
  port: 5432,
  password: '745afb713e2a6bd273de5ce030fa2aa0bbcaf2916b4252362dae57e4c0db0b8b',
  ssl: true
})

types.setTypeParser(TIMESTAMP_ID, str => moment.utc(str).format())

export default {
  query: (text: string, params: Array<any>) => pool.query(text, params)
}
