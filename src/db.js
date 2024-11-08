import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'cilsa',
    password: 'cilsa',
    port: 3306,
    database: 'todolistoCilsa'    
})

