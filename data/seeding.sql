-- BEGIN;

-- CREATION DE 2 USERS

INSERT INTO "user" ("email", "password", "first_name", "last_name")
VALUES ('julienlebg@caramail.com', 'password123', 'Julien', 'LePotagiste');

INSERT INTO "user" ("email", "password", "first_name", "last_name")
VALUES ('superdorothee@gmail.com', 'password123', 'Dorothee', 'LaPotagiste');


-- CREATION DE ZONES
INSERT INTO "zone" ("name", "user_id")
VALUES ('Serre', 1);
INSERT INTO "zone" ("name", "user_id")
VALUES ('Jardin Nord', 1);
INSERT INTO "zone" ("name", "user_id")
VALUES ('Jardin Sud', 1);


INSERT INTO "zone" ("name", "user_id")
VALUES ('Potager', 2);



-- COMMIT;
