


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE todo (
  todo_id UUID PRIMARY KEY NOT NULL,
  description VARCHAR(100) NOT NULL
); 