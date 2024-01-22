BEGIN;


INSERT INTO "family" ("id", "name", "vegetable_type" , "soil_type", "watering", "weeding", "emergence", "growth_time", "depth", "spacing", "row_spacing", "exposure", "start_date_seeding", "end_date_seeding", "start_date_planting", "end_date_planting", "start_date_harvest", "end_date_harvest")
VALUES (2, 'Ail de Printemps', 'Bulbe', 'Fertile, bien drainé', '1 fois/semaine', '2 fois/mois', NULL, 170, '2-3 cm', '15 cm', '30 cm', 'Ensoleillée', NULL, NULL, '01-01', '04-30', '05-01', '07-31'),
(3, 'Aneth', 'Herbe', 'Léger, riche', '1-2 fois/semaine', '2-3 fois/mois', NULL, 65, '1-2 cm', '30 cm', '30 cm', 'Ensoleillée', NULL, NULL, '04-01', '06-15', '06-01', '09-30'),
(4, 'Artichaut', 'Légume-feuille', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', 60, 170, '2 cm', '60 cm', '100 cm', 'Ensoleillée', '02-01', '04-30', '04-01', '05-31', '05-01', '08-31'),
(5, 'Aubergine', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', 45, 80, '0.5 cm', '60 cm', '90 cm', 'Ensoleillée', '02-01', '05-31', '04-15', '05-31', '07-15', '10-31'),
(6, 'Basilic', 'Herbe', 'Riche, humide', '1-2 fois/semaine', '1 fois/semaine', NULL, 75, '0.5 cm', '50 cm', '50 cm', 'Ensoleillée', NULL, NULL, '03-01', '07-31', '07-01', '10-31'),
(7, 'Betterave', 'Racine', 'Léger, riche', '1 fois/semaine', '2 fois/mois', NULL, 60, '2 cm', '25 cm', '40 cm', 'Ensoleillée', NULL, NULL, '03-15', '06-30', '06-15', '10-31'),
(8, 'Blette / bette', 'Feuille', 'Riche, humide', '1-2 fois/semaine', '2 fois/mois', NULL, 55, '1-2 cm', '30 cm', '40 cm', 'Mi-ombre', NULL, NULL, '02-01', '09-31', '04-01', '11-30'),
(9, 'Brocoli', 'Fleur', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, 70, '1-2 cm', '60 cm', '60 cm', 'Ensoleillée', NULL, NULL, '02-01', '08-31', '05-01', '10-31'),
(10, 'Carotte', 'Racine', 'Léger, sableux', '1 fois/semaine', '2 fois/mois', NULL, 75, '1-2 cm', '3 cm', '20 cm', 'Ensoleillée', NULL, NULL, '02-01', '07-31', '05-01', '11-30'),
(11, 'Chou', 'Feuille', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, 100, '1-2 cm', '80 cm', '80 cm', 'Ensoleillée', NULL, NULL, '01-01', '09-30', '06-15', '12-31'),
(12, 'Concombre', 'Fruit', 'Riche, humide', '1-2 fois/semaine', '2-3 fois/mois', 15, 60, '1-2 cm', '60 cm', '100 cm', 'Ensoleillée', '02-01', '04-30', '03-01', '05-31', '07-01', '10-31'),
(13, 'Coriandre', 'Herbe', 'Léger, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, 35, '1 cm', '25 cm', '25 cm', 'Ensoleillée', NULL, NULL, '04-01', '05-30', '05-15', '09-30'),
(14, 'Courgette', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', 15, 60, '2-3 cm', '100 cm', '100 cm', 'Ensoleillée', '03-01', '05-31', '03-01', '06-30', '07-01', '09-30'),
(15, 'Épinard', 'Feuille', 'Riche, humide', '2-3 fois/semaine', '1-2 fois/semaine', 20, 40, '1-2 cm', '15 cm', '20 cm', 'Mi-ombre', '02-01', '04-30', '03-01', '05-31', '05-01', '06-30'),
(16, 'Haricot', 'Gousse', 'Léger, bien drainé', '1 fois/semaine', '1-2 fois/mois', NULL, 65, '3-5 cm', '10 cm', '40 cm', 'Ensoleillée', NULL, NULL, '05-01', '07-31', '07-01', '10-31'),
(17, 'Laitue', 'Feuille', 'Riche, humide', '2-3 fois/semaine', '1-2 fois/semaine', 30, 50, '0.5 cm', '30 cm', '30 cm', 'Mi-ombre', '02-01', '05-30', '04-01', '06-30', '05-01', '09-30'),
(18, 'Menthe', 'Herbe', 'Humide, bien drainé', '2-3 fois/semaine', '1 fois/mois', NULL, 75, '1-2 cm', '30 cm', '30 cm', 'Mi-ombre', NULL, NULL, '04-01', '06-30', '06-01', '10-15'),
(19, 'Navet', 'Racine', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, 45, '1-2 cm', '10 cm', '30 cm', 'Ensoleillée', NULL, NULL, '03-01', '09-30', '05-01', '11-30'),
(20, 'Oignon', 'Bulbe', 'Léger, bien drainé', '1 fois/semaine', '2 fois/mois', NULL, 110, '1-2 cm', '10 cm', '30 cm', 'Ensoleillée', NULL, NULL, '02-01', '04-30', '05-01', '09-30'),
(21, 'Pois', 'Gousse', 'Riche, bien drainé', '1 fois/semaine', '2 fois/mois', NULL, 64, '3-5 cm', '5 cm', '40 cm', 'Ensoleillée', NULL, NULL, '02-15', '05-31', '05-01', '09-30'),
(22, 'Poireau', 'Tige', 'Lourd, humide', '1 fois/semaine', '2-3 fois/mois', NULL, 130, '1-2 cm', '10 cm', '40 cm', 'Ensoleillée', NULL, NULL, '02-01', '05-31', '07-15', '12-31'),
(23, 'Poivron', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', 40, 75, '1-2 cm', '50 cm', '50 cm', 'Ensoleillée', '02-01', '04-31', '05-01', '06-30', '07-01', '10-15'),
(24, 'Pomme de terre', 'Tubercule', 'Riche, humide', '1 fois/semaine', '2-3 fois/mois', NULL, 110, '15 cm', '30 cm', '50 cm', 'Ensoleillée', NULL, NULL, '02-15', '04-30', '07-01', '10-15'),
(25, 'Potirron', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, 110, '2-3 cm', '100 cm', '100 cm', 'Ensoleillée', NULL, NULL, '05-01', '06-30', '09-01', '11-30'),
(26, 'Radis', 'Racine', 'Léger et frais', '2-3 fois/semaine', '1 fois/semaine', NULL, 25, '1 cm', '3 cm', '15 cm', 'Ensoleillée', NULL, NULL, '03-01', '09-15', '04-01', '10-15'),
(28, 'Tomate', 'Fruit', 'Riche et bien drainé', '1-2 fois/semaine', '2-3 fois/mois', 40, 70, '1 cm', '50 cm', '100 cm', 'Ensoleillée', '02-01', '04-15', '03-15', '05-01', '06-15', '10-31');

COMMIT;
