CREATE TABLE IF NOT EXISTS ticket (
    ticket_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT DEFAULT 'OPEN',
    submitter INTEGER NOT NULL,
    FOREIGN KEY (submitter) REFERENCES user(user_id),
    FOREIGN KEY (status) REFERENCES ticket_status(code)
);

CREATE TABLE IF NOT EXISTS ticket_status (
    code TEXT NOT NULL PRIMARY KEY,
    description TEXT
);

INSERT INTO ticket_status (code) VALUES 
    ('OPEN'),
    ('WAITING_FOR_RESPONSE'),
    ('CLOSED');