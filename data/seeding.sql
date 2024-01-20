
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
INSERT INTO "vegetable" ("emergence", "growth_time", "variety", "comment", "zone_id", "family_id")
VALUES 
(20, 90, 'Blanc', 'Bulbe donné par mamie', 1, 1),
(30, 90, 'Violet', NULL, 1, 1),
(NULL, 40, 'Bonbon de Bréel', 'Variété ancienne', 2, 2),
(10, 20, 'Batavia', 'Pas de produit anti limace', 3, 3);


-- Tâches
INSERT INTO "task" (
    "type", "status", "status_code", "start_date_period", "end_date_period", "effective_date", "comment", "vegetable_id"
) VALUES
    ('Semis', 'à faire', 1,  '2024-01-15', '2024-03-15', '2024-01-15', 'semis', 1),
    ('Semis', 'à faire', 1,  '2024-01-15', '2024-03-15', '2024-01-15', 'semis', 2),
    ('Semis', 'à faire', 1,  '2024-01-15', '2024-03-15', '2024-01-15', 'semis', 4),
    ('Plantation', 'à faire', 1, '2024-04-01', '2024-06-30', '2024-04-01', 'plantation', 1),
    ('Plantation', 'à faire', 1, '2024-04-01', '2024-06-30', '2024-04-01', 'plantation', 2),
    ('Plantation', 'à faire', 1, '2024-04-01', '2024-06-30', '2024-04-01', 'plantation', 3),
    ('Plantation', 'à faire', 1, '2024-04-01', '2024-06-30', '2024-04-01', 'plantation', 4),
    ('Récolte', 'à faire', 1, '2024-04-01', '2024-06-30', '2024-04-01', 'recolte', 1),
    ('Récolte', 'à faire', 1, '2024-04-01', '2024-06-30', '2024-04-01', 'recolte', 2),
    ('Récolte', 'à faire', 1, '2024-04-01', '2024-06-30', '2024-04-01', 'recolte', 3),
    ('Récolte', 'à faire', 1, '2024-04-01', '2024-06-30', '2024-04-01', 'recolte', 4);

COMMIT;


