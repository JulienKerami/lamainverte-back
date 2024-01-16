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


-- SEEDING DES FAMILLES
INSERT INTO "family" 
("name", "type", "start_date_day_seeding", "start_date_month_seeding", "end_date_day_seeding", "end_date_month_seeding", "start_date_day_planting", "start_date_month_planting", "end_date_day_planting", "end_date_month_planting", "start_date_day_harvest", "start_date_month_harvest", "end_date_day_harvest", "end_date_month_harvest", "spacing", "row_spacing", "depth", "soil_type", "exposure")
VALUES 
('Ail d\'automne', 'Bulbe', NULL, NULL, NULL, NULL, 1, 10, 30, 11, 1, 5, 31, 7, 15, 30, 2, 'Fertile, bien drainé', 'Ensoleillée'),
('Ail de printemps', 'Bulbe', NULL, NULL, NULL, NULL, 1, 1, 30, 4, 1, 5, 31, 7, 15, 30, 2, 'Fertile, bien drainé', 'Ensoleillée'),
('Aneth', 'Herbe', NULL, NULL, NULL, NULL, 1, 4, 15, 6, 1, 6, 30, 9, 30, 30, 1, 'Léger, riche', 'Ensoleillée'),
('Artichaut', 'Légume-feuille', 1, 2, 30, 4, 1, 4, 31, 5, 1, 5, 31, 8, 60, 100, 2, 'Riche, bien drainé', 'Ensoleillée'),
('Aubergine', 'Fruit', 1, 2, 31, 5, 15, 4, 31, 5, 15, 7, 31, 10, 60, 90, 0.5, 'Riche, bien drainé', 'Ensoleillée'),
('Basilic', 'Herbe', NULL, NULL, NULL, NULL, 1, 3, 31, 7, 1, 7, 31, 10, 50, 50, 0.5, 'Riche, humide', 'Ensoleillée'),
('Betterave', 'Racine', NULL, NULL, NULL, NULL, 15, 3, 30, 6, 15, 6, 31, 10, 25, 40, 2, 'Léger, riche', 'Ensoleillée'),
('Blette / bette', 'Feuille', NULL, NULL, NULL, NULL, 1, 2, 30, 9, 1, 4, 30, 11, 30, 40, 1, 'Riche, humide', 'Mi-ombre'),
('Brocoli', 'Fleur', NULL, NULL, NULL, NULL, 1, 2, 31, 8, 1, 5, 31, 10, 60, 60, 1, 'Riche, bien drainé', 'Ensoleillée'),
('Carotte', 'Racine', NULL, NULL, NULL, NULL, 1, 2, 31, 7, 1, 5, 30, 11, 3, 20, 1, 'Léger, sableux', 'Ensoleillée'),
('Chou', 'Feuille', NULL, NULL, NULL, NULL, 1, 1, 30, 9, 15, 6, 31, 12, 80, 80, 1, 'Riche, bien drainé', 'Ensoleillée'),
('Concombre', 'Fruit', 1, 2, 30, 4, 1, 3, 31, 5, 1, 7, 31, 10, 60, 100, 1, 'Riche, humide', 'Ensoleillée'),
('Coriandre', 'Herbe', NULL, NULL, NULL, NULL, 1, 4, 30, 5, 15, 5, 30, 9, 25, 25, 1, 'Léger, bien drainé', 'Ensoleillée'),
('Courgette', 'Fruit', 1, 3, 31, 5, 1, 3, 30, 6, 1, 7, 30, 9, 100, 100, 2, 'Riche, bien drainé', 'Ensoleillée'),
('Épinard', 'Feuille', 1, 2, 30, 4, 1, 3, 31, 5, 1, 5, 30, 6, 15, 20, 1, 'Riche, humide', 'Mi-ombre'),
('Haricot', 'Gousse', NULL, NULL, NULL, NULL, 1, 5, 31, 7, 1, 7, 31, 10, 10, 40, 3, 'Léger, bien drainé', 'Ensoleillée'),
('Laitue', 'Feuille', 1, 2, 30, 5, 1, 4, 30, 6, 1, 5, 30, 9, 30, 30, 0.5, 'Riche, humide', 'Mi-ombre'),
('Menthe', 'Herbe', NULL, NULL, NULL, NULL, 1, 4, 30, 6, 1, 6, 15, 10, 30, 30, 1, 'Humide, bien drainé', 'Mi-ombre'),
('Navet', 'Racine', NULL, NULL, NULL, NULL, 1, 3, 30, 9, 1, 5, 30, 11, 10, 30, 1, 'Riche, bien drainé', 'Ensoleillée'),
('Oignon', 'Bulbe', NULL, NULL, NULL, NULL, 1, 2, 30, 4, 1, 5, 30, 9, 10, 30, 1, 'Léger, bien drainé', 'Ensoleillée'),
('Pois', 'Gousse', NULL, NULL, NULL, NULL, 15, 2, 31, 5, 1, 5, 30, 9, 5, 40, 3, 'Riche, bien drainé', 'Ensoleillée'),
('Poireau', 'Tige', NULL, NULL, NULL, NULL, 1, 2, 31, 5, 15, 7, 31, 12, 10, 40, 1, 'Lourd, humide', 'Ensoleillée'),
('Poivron', 'Fruit', 1, 2, 30, 4, 1, 5, 30, 6, 1, 7, 15, 10, 50, 50, 1, 'Riche, bien drainé', 'Ensoleillée'),
('Pomme de terre', 'Tubercule', NULL, NULL, NULL, NULL, 15, 2, 30, 4, 1, 7, 15, 10, 30, 50, 15, 'Riche, humide', 'Ensoleillée'),
('Potiron', 'Fruit', NULL, NULL, NULL, NULL, 1, 5, 30, 6, 1, 9, 30, 11, 100, 100, 2, 'Riche, bien drainé', 'Ensoleillée'),
('Radis', 'Racine', NULL, NULL, NULL, NULL, 1, 3, 15, 9, 1, 4, 15, 10, 3, 15, 1, 'Léger et frais', 'Ensoleillée'),
('Salade / laitue', 'Feuille', 1, 2, 15, 9, 1, 3, 31, 10, 1, 3, 30, 11, 30, 30, 0.5, 'Riche et frais', 'Ensoleillée/Mi-ombre'),
-- continuer après la tomate
