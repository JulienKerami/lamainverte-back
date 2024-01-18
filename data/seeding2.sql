
-- Données d'exemple
BEGIN;
-- Utilisateurs
INSERT INTO "user" ("email", "password", "first_name", "last_name") VALUES
    ('utilisateur1@example.com', 'motdepasse1', 'Jean', 'Dupont'),
    ('utilisateur2@example.com', 'motdepasse2', 'Marie', 'Martin');

-- Zones
INSERT INTO "zone" ("name", "user_id") VALUES
    ('Zone A', 1),
    ('Zone B', 2);

-- Familles
INSERT INTO "family" (
    "name", "depth", "start_date_day_seeding", "start_date_month_seeding", 
    "end_date_day_seeding", "end_date_month_seeding", "start_date_day_planting", 
    "start_date_month_planting", "end_date_day_planting", "end_date_month_planting", 
    "start_date_day_harvest", "start_date_month_harvest", "end_date_day_harvest", 
    "end_date_month_harvest"
) VALUES
    ('Famille 1', 'Profonde', 1, 1, 30, 4, 1, 5, 1, 6, 1, 8, 31, 10),
    ('Famille 2', 'Peu profonde', 1, 3, 30, 5, 1, 7, 1, 8, 1, 10, 31, 12);

-- Légumes
INSERT INTO "vegetable" (
    "growth_time", "variety", "comment", "zone_id", "family_id"
) VALUES
    (60, 'Carotte', 'Variété orange', 1, 1),
    (90, 'Tomate', 'Variété cerise', 2, 2);

-- Tâches
INSERT INTO "task" (
    "type", "status", "start_date_period", "end_date_period", "effective_date", "comment", "vegetable_id"
) VALUES
    ('Semis', true, '2024-01-15', '2024-03-15', '2024-01-15', 'Tâche de semis pour la Carotte', 1),
    ('Plantation', false, '2024-04-01', '2024-06-30', '2024-04-01', 'Tâche de plantation pour la Tomate', 2);

COMMIT;
-- Vous pouvez ajouter d'autres instructions INSERT pour des données supplémentaires au besoin.

