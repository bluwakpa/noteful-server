CREATE TABLE notes (
    id INTEGER primary key generated by default as identity,
    name TEXT NOT NULL,
    modified TEXT NOT NULL,
    "folderId" INTEGER DEFAULT 1,
    content TEXT
);