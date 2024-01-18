BEGIN;
-- CREATION DE FAMILLES
INSERT INTO "family" ("name", "vegetable_type" , "soil_type", "watering", "weeding", "emergence", "depth", "spacing", "row_spacing", "exposure", "start_date_day_seeding", "start_date_month_seeding", "end_date_day_seeding", "end_date_month_seeding", "start_date_day_planting", "start_date_month_planting", "end_date_day_planting", "end_date_month_planting", "start_date_day_harvest", "start_date_month_harvest", "end_date_day_harvest", "end_date_month_harvest")
VALUES ('Ail dautomne', 'Bulbe', 'Fertile, bien drainé', '1 fois/semaine', '1 fois / mois', NULL, '2-3 cm', '15 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '10', '30', '11', '1', '5', '31', '7'),
('Ail de printemps', 'Bulbe', 'Fertile, bien drainé', '1 fois/semaine', '2 fois/mois', NULL, '2-3 cm', '15 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '1', '30', '4', '1', '5', '31', '7'),
('Aneth', 'Herbe', 'Léger, riche', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '30 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '4', '15', '6', '1', '6', '30', '9'),
('Artichaut', 'Légume-feuille', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '2 cm', '60 cm', '100 cm', 'Ensoleillée', '1', '2', '30', '4', '1', '4', '31', '5', '1', '5', '31', '8'),
('Aubergine', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '0.5 cm', '60 cm', '90 cm', 'Ensoleillée', '1', '2', '31', '5', '15', '4', '31', '5', '15', '7', '31', '10'),
('Basilic', 'Herbe', 'Riche, humide', '1-2 fois/semaine', '1 fois/semaine', NULL, '0.5 cm', '50 cm', '50 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '3', '31', '7', '1', '7', '31', '10'),
('Betterave', 'Racine', 'Léger, riche', '1 fois/semaine', '2 fois/mois', NULL, '2 cm', '25 cm', '40 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '15', '3', '30', '6', '15', '6', '31', '10'),
('Blette / bette', 'Feuille', 'Riche, humide', '1-2 fois/semaine', '2 fois/mois', NULL, '1-2 cm', '30 cm', '40 cm', 'Mi-ombre', NULL, NULL, NULL, NULL, '1', '2', '31', '9', '1', '4', '30', '11'),
('Brocoli', 'Fleur', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '60 cm', '60 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '2', '31', '8', '1', '5', '31', '10'),
('Carotte', 'Racine', 'Léger, sableux', '1 fois/semaine', '2 fois/mois', NULL, '1-2 cm', '3 cm', '20 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '2', '31', '7', '1', '5', '30', '11'),
('Chou', 'Feuille', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '80 cm', '80 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '1', '30', '9', '15', '6', '31', '12'),
('Concombre', 'Fruit', 'Riche, humide', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '60 cm', '100 cm', 'Ensoleillée', '1', '2', '30', '4', '1', '3', '31', '5', '1', '7', '31', '10'),
('Coriandre', 'Herbe', 'Léger, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '0.5 cm', '25 cm', '25 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '4', '30', '5', '15', '5', '30', '9'),
('Courgette', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '2-3 cm', '100 cm', '100 cm', 'Ensoleillée', '1', '3', '31', '5', '1', '3', '30', '6', '1', '7', '30', '9'),
('Épinard', 'Feuille', 'Riche, humide', '2-3 fois/semaine', '1-2 fois/semaine', NULL, '1-2 cm', '15 cm', '20 cm', 'Mi-ombre', '1', '2', '30', '4', '1', '3', '31', '5', '1', '5', '30', '6'),
('Haricot', 'Gousse', 'Léger, bien drainé', '1 fois/semaine', '1-2 fois/mois', NULL, '3-5 cm', '10 cm', '40 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '5', '31', '7', '1', '7', '31', '10'),
('Laitue', 'Feuille', 'Riche, humide', '2-3 fois/semaine', '1-2 fois/semaine', NULL, '0.5 cm', '30 cm', '30 cm', 'Mi-ombre', '1', '2', '30', '5', '1', '4', '30', '6', '1', '5', '30', '9'),
('Menthe', 'Herbe', 'Humide, bien drainé', '2-3 fois/semaine', '1 fois/mois', NULL, '1-2 cm', '30 cm', '30 cm', 'Mi-ombre', NULL, NULL, NULL, NULL, '1', '4', '30', '6', '1', '6', '15', '10'),
('Navet', 'Racine', 'Rich, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '10 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '3', '30', '9', '1', '5', '30', '11'),
('Oignon', 'Bulbe', 'Léger, bien drainé', '1 fois/semaine', '2 fois/mois', NULL, '1-2 cm', '10 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '2', '30', '4', '1', '5', '30', '9'),
('Poireau', 'Tige', 'Lourd, humide', '1 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '10 cm', '40 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '2', '31', '5', '15', '7', '31', '12'),
('Poivron', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '50 cm', '50 cm', 'Ensoleillée', '1', '2', '31', NULL, '1', '5', '30', '6', '1', '7', '15', '10'),
('Pomme de terre', 'Tubercule', 'Riche, humide', '1 fois/semaine', '2-3 fois/mois', NULL, '15 cm', '30 cm', '50 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '15', '2', '30', '4', '1', '7', '15', '10'),
('Potirron', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '2-3 cm', '100 cm', '100 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '5', '30', '6', '1', '9', '30', '11'),
('Radis', 'Racine', 'Léger et frais', '2-3 fois/semaine', '1 fois/semaine', NULL, '1 cm', '3 cm', '15 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '1', '3', '15', '9', '1', '4', '15', '10'),
('Salade / laitue', 'Feuille', 'Riche et frais', '2-3 fois/semaine', '1-2 fois/semaine', NULL, '0.5 cm', '30 cm', '30 cm', 'Ensoleillée/Mi-ombre', NULL, NULL, NULL, NULL, '1', '2', '15', '9', '1', '3', '30', '11'),
('Tomate', 'Fruit', 'Riche et bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1 cm', '50 cm', '100 cm', 'Ensoleillée', '1', '2', '15', '4', '15', '3', '1', '5', '15', '6', '31', '10');

COMMIT;