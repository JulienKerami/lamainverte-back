BEGIN;
-- CREATION DE FAMILLES
INSERT INTO "family" ("name", "vegetable_type" , "soil_type", "watering", "weeding", "emergence", "depth", "spacing", "row_spacing", "exposure", "start_date_seeding", "end_date_seeding", "start_date_planting", "end_date_planting", "start_date_harvest", "end_date_harvest")
VALUES ('Ail dautomne', 'Bulbe', 'Fertile, bien drainé', '1 fois/semaine', '1 fois / mois', NULL, '2-3 cm', '15 cm', '30 cm', 'Ensoleillée', NULL, NULL, '01-10', '30-11', '01-05', '31-07'),
('Ail de printemps', 'Bulbe', 'Fertile, bien drainé', '1 fois/semaine', '2 fois/mois', NULL, '2-3 cm', '15 cm', '30 cm', 'Ensoleillée', NULL, NULL, '01-01', '30-04', '01-05', '31-07'),
('Aneth', 'Herbe', 'Léger, riche', '1-2 fois/semaine', '2-3 fois/mois', NULL, '1-2 cm', '30 cm', '30 cm', 'Ensoleillée', NULL, NULL,  '01-04', '15-06', '01-06', '30-09');

COMMIT;