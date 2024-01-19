BEGIN;
-- CREATION DE FAMILLES
INSERT INTO "family" ("name", "vegetable_type" , "soil_type", "watering", "weeding", "emergence", "depth", "spacing", "row_spacing", "exposure", "start_date_day_seeding", "start_date_month_seeding", "end_date_day_seeding", "end_date_month_seeding", "start_date_day_planting", "start_date_month_planting", "end_date_day_planting", "end_date_month_planting", "start_date_day_harvest", "start_date_month_harvest", "end_date_day_harvest", "end_date_month_harvest")
VALUES ('Ail dautomne', 'Bulbe', 'Fertile, bien drainé', '1 fois/semaine', '1 fois / mois', NULL, '2-3 cm', '15 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '10', '30', '11', '01', '05', '31', '07'),
('Ail de printemps', 'Bulbe', 'Fertile, bien drainé', '1 fois/semaine', '2 fois/mois', NULL, '2-3 cm', '15 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '01', '30', '04', '01', '05', '31', '07'),
('Aneth', 'Herbe', 'Léger, riche', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '30 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '04', '15', '06', '01', '06', '30', '09'),
('Artichaut', 'Légume-feuille', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '2 cm', '60 cm', '100 cm', 'Ensoleillée', '01', '02', '30', '04', '01', '04', '31', '05', '01', '05', '31', '08'),
('Aubergine', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '0.5 cm', '60 cm', '90 cm', 'Ensoleillée', '01', '02', '31', '05', '15', '04', '31', '05', '15', '07', '31', '10'),
('Basilic', 'Herbe', 'Riche, humide', '1-2 fois/semaine', '1 fois/semaine', NULL, '0.5 cm', '50 cm', '50 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '03', '31', '07', '01', '07', '31', '10'),
('Betterave', 'Racine', 'Léger, riche', '1 fois/semaine', '2 fois/mois', NULL, '2 cm', '25 cm', '40 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '15', '03', '30', '06', '15', '06', '31', '10'),
('Blette / bette', 'Feuille', 'Riche, humide', '1-2 fois/semaine', '2 fois/mois', NULL, '1-2 cm', '30 cm', '40 cm', 'Mi-ombre', NULL, NULL, NULL, NULL, '01', '02', '31', '09', '01', '04', '30', '11'),
('Brocoli', 'Fleur', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '60 cm', '60 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '02', '31', '08', '01', '05', '31', '10'),
('Carotte', 'Racine', 'Léger, sableux', '1 fois/semaine', '2 fois/mois', NULL, '1-2 cm', '3 cm', '20 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '02', '31', '07', '01', '05', '30', '11'),
('Chou', 'Feuille', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '80 cm', '80 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '01', '30', '09', '15', '06', '31', '12'),
('Concombre', 'Fruit', 'Riche, humide', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '60 cm', '100 cm', 'Ensoleillée', '01', '02', '30', '04', '01', '03', '31', '05', '01', '07', '31', '10'),
('Coriandre', 'Herbe', 'Léger, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '0.5 cm', '25 cm', '25 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '04', '30', '05', '15', '05', '30', '09'),
('Courgette', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '2-3 cm', '100 cm', '100 cm', 'Ensoleillée', '01', '03', '31', '05', '01', '03', '30', '06', '01', '07', '30', '09'),
('Épinard', 'Feuille', 'Riche, humide', '2-3 fois/semaine', '1-2 fois/semaine', NULL, '1-2 cm', '15 cm', '20 cm', 'Mi-ombre', '01', '02', '30', '04', '01', '03', '31', '05', '01', '05', '30', '06'),
('Haricot', 'Gousse', 'Léger, bien drainé', '1 fois/semaine', '1-2 fois/mois', NULL, '3-5 cm', '10 cm', '40 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '05', '31', '07', '01', '07', '31', '10'),
('Laitue', 'Feuille', 'Riche, humide', '2-3 fois/semaine', '1-2 fois/semaine', NULL, '0.5 cm', '30 cm', '30 cm', 'Mi-ombre', '01', '02', '30', '05', '01', '04', '30', '06', '01', '05', '30', '09'),
('Menthe', 'Herbe', 'Humide, bien drainé', '2-3 fois/semaine', '1 fois/mois', NULL, '1-2 cm', '30 cm', '30 cm', 'Mi-ombre', NULL, NULL, NULL, NULL, '01', '04', '30', '06', '01', '06', '15', '10'),
('Navet', 'Racine', 'Rich, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '10 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '03', '30', '09', '01', '05', '30', '11'),
('Oignon', 'Bulbe', 'Léger, bien drainé', '1 fois/semaine', '2 fois/mois', NULL, '1-2 cm', '10 cm', '30 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '02', '30', '04', '01', '05', '30', '09'),
('Poireau', 'Tige', 'Lourd, humide', '1 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '10 cm', '40 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '02', '31', '05', '15', '07', '31', '12'),
('Poivron', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '50 cm', '50 cm', 'Ensoleillée', '1', '2', '31', NULL, '01', '05', '30', '06', '01', '07', '15', '10'),
('Pomme de terre', 'Tubercule', 'Riche, humide', '1 fois/semaine', '2-3 fois/mois', NULL, '15 cm', '30 cm', '50 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '15', '02', '30', '04', '01', '07', '15', '10'),
('Potirron', 'Fruit', 'Riche, bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '2-3 cm', '100 cm', '100 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '05', '30', '06', '01', '09', '30', '11'),
('Radis', 'Racine', 'Léger et frais', '2-3 fois/semaine', '1 fois/semaine', NULL, '1 cm', '3 cm', '15 cm', 'Ensoleillée', NULL, NULL, NULL, NULL, '01', '03', '15', '09', '01', '04', '15', '10'),
('Salade / laitue', 'Feuille', 'Riche et frais', '2-3 fois/semaine', '1-2 fois/semaine', NULL, '0.5 cm', '30 cm', '30 cm', 'Ensoleillée/Mi-ombre', NULL, NULL, NULL, NULL, '01', '02', '15', '09', '01', '03', '30', '11'),
('Tomate', 'Fruit', 'Riche et bien drainé', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1 cm', '50 cm', '100 cm', 'Ensoleillée', '01', '02', '15', '04', '15', '03', '01', '05', '15', '06', '31', '10');

COMMIT;