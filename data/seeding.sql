
-- Données d'exemples pour faire des tests
BEGIN;


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



-- CREATION DE VEGETABLES
INSERT INTO "vegetable" ("growth_time", "variety", "comment", "zone_id", "family_id")
VALUES (90, 'Blanc', 'Bulbe donné par mamie', 1, 1),
(90, 'Violet', NULL, 1, 1),
(40, 'Bonbon de Bréel', 'Variété ancienne', 2, 27),
(20, 'Batavia', 'Pas de produit anti limace', 3, 26);


-- Tâches
INSERT INTO "task" (
    "type", "status", "start_date_period", "end_date_period", "effective_date", "comment", "vegetable_id"
) VALUES
    ('Semis', true, '2024-01-15', '2024-03-15', '2024-01-15', 'semis', 1),
    ('Plantation', false, '2024-04-01', '2024-06-30', '2024-04-01', 'plantation', 1),
    ('Récolte', false, '2024-04-01', '2024-06-30', '2024-04-01', 'recolte', 1);

COMMIT;


