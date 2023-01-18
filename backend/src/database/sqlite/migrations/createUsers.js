const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
    document Integer(11) PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    apartmentBlock VARCHAR,
    phone Integer(11),
    register VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

module.exports = createUsers;