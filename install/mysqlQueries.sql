CREATE DATABASE fesdlc;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'DMEMDN';

flush privileges;

CREATE TABLE Fuehrerscheine (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Klasse VARCHAR(5) NOT NULL,
Beschreibung VARCHAR(255)
);

INSERT INTO Fuehrerscheine (Klasse, Beschreibung)
VALUES ('B', 'Kraftfahrzeuge mit bis zu 3.500 kg zulässige Gesamtmasse'),
('C1',  'Kraftfahrzeuge mit einer Gesamtmasse zwischen 3.500 kg und 7.500 kg'),
('C', 'Kraftfahrzeuge mit über 3.500 kg Gesamtmasse'),
('D1', 'Kraftfahrzeuge bis 8 m Länge, die zwischen 8 und 16 Personen befördern können (Fahrer nicht eingeschlossen)'),
('BE', 'Fahrzeuge der Klasse B sowie Anhänger mit einer zulässigen Gesamtmasse zwischen 750 und 3.500 kg'),
('C1E', 'Kombination aus einem Kraftfahrzeug gemäß C1 und einem Anhänger über 750 kg sowie Fahrzeug der Klasse B und ein Anhänger über 3.500 kg'),
('CE', 'Kombination aus einem Kraftfahrzeug gemäß C und einem Anhänger über 750 kg'),
('D1E', 'Kombination aus einem Kraftfahrzeug der Klasse D1 und einem Anhänger über 750 kg'),
('DE', 'Kombination aus einem Kraftfahrzeug der Klasse D und einem Anhänger über 750 kg'),
('L', 'Land- und forstwirtschaftliche Zugmaschinen bis 40 km/h sowie selbstfahrende Arbeitsmaschinen, Stapler, Futtermischwagen und andere Flurförderfahrzeuge bis 25 km/h'),
('T', 'Land- und forstwirtschaftliche Zugmaschinen bis 60 km/h (bbH) sowie selbstfahrende Arbeitsmaschinen, Stapler, Futtermischwagen und andere Flurförderfahrzeuge bis 40 km/h (bbH)')
;

CREATE TABLE Qualifikationen (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Qualifikation VARCHAR(255) NOT NULL
);

INSERT INTO Qualifikationen (Qualifikation)
VALUES ('Personenbeförderungsschein'),
('Schulung "sicheres Be- und Entladen"'),
('Schulung "Verkehrssicherheit auf dem Betriebsgelände"'),
('Schulung "Arbeitssicherheit"'),
('Schulung "Beförderung von Personen"')
;

CREATE TABLE Fahrzeugklassen (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Bezeichnung VARCHAR(50) NOT NULL,
Fuehrerschein_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein_ID) REFERENCES Fuehrerscheine(id),
Qualifikation1_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation1_ID) REFERENCES Qualifikationen(id),
Qualifikation2_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation2_ID) REFERENCES Qualifikationen(id),
Qualifikation3_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation3_ID) REFERENCES Qualifikationen(id),
Qualifikation4_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation4_ID) REFERENCES Qualifikationen(id),
Qualifikation5_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation5_ID) REFERENCES Qualifikationen(id)
);

INSERT INTO Fahrzeugklassen (Bezeichnung, Fuehrerschein_ID, Qualifikation1_ID, Qualifikation2_ID)
VALUES('Kleinbus', (SELECT id FROM Fuehrerscheine WHERE Klasse = 'D1'), (SELECT id FROM Qualifikationen WHERE Qualifikation = 'Personenbeförderungsschein'), (SELECT id FROM Qualifikationen WHERE Qualifikation = 'Schulung "Beförderung von Personen"')),
('LKW', (SELECT id FROM Fuehrerscheine WHERE Klasse = 'C'), (SELECT id FROM Qualifikationen WHERE Qualifikation = 'Schulung "sicheres be- und entladen"'), (SELECT id FROM Qualifikationen WHERE Qualifikation = 'Schulung "Arbeitssicherheit"')),
('Gabelstapler', (SELECT id FROM Fuehrerscheine WHERE Klasse = 'L'), (SELECT id FROM Qualifikationen WHERE Qualifikation = 'Schulung "Verkehrssicherheit auf dem Betriebsgelände"'), NULL)
;

CREATE TABLE Fahrzeuge (
RFID VARCHAR(20) NOT NULL PRIMARY KEY,
Kennzeichen VARCHAR(15),
Fahrzeug_ID INT UNSIGNED,
FOREIGN KEY(Fahrzeug_ID) REFERENCES Fahrzeugklassen(id)
);

INSERT INTO Fahrzeuge
VALUES('F0:00:00:00:00:00:00', 'F-ES 123', 1),
('E0:00:00:00:00:00:00', 'F-ES 321', 2),
('D0:00:00:00:00:00:00', 'F-ES 815', 3)
;

CREATE TABLE Fahrer (
RFID VARCHAR(20) NOT NULL PRIMARY KEY,
Vorname VARCHAR(50) NOT NULL,
Nachname VARCHAR(50) NOT NULL,
Fuehrerschein1_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein1_ID) REFERENCES Fuehrerscheine(id),
F1_Gueltigkeit DATE,
Fuehrerschein2_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein2_ID) REFERENCES Fuehrerscheine(id),
F2_Gueltigkeit DATE,
Fuehrerschein3_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein3_ID) REFERENCES Fuehrerscheine(id),
F3_Gueltigkeit DATE,
Fuehrerschein4_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein4_ID) REFERENCES Fuehrerscheine(id),
F4_Gueltigkeit DATE,
Fuehrerschein5_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein5_ID) REFERENCES Fuehrerscheine(id),
F5_Gueltigkeit DATE,
Fuehrerschein6_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein6_ID) REFERENCES Fuehrerscheine(id),
F6_Gueltigkeit DATE,
Fuehrerschein7_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein7_ID) REFERENCES Fuehrerscheine(id),
F7_Gueltigkeit DATE,
Fuehrerschein8_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein8_ID) REFERENCES Fuehrerscheine(id),
F8_Gueltigkeit DATE,
Fuehrerschein9_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein9_ID) REFERENCES Fuehrerscheine(id),
F9_Gueltigkeit DATE,
Fuehrerschein10_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein10_ID) REFERENCES Fuehrerscheine(id),
F10_Gueltigkeit DATE,
Fuehrerschein11_ID INT UNSIGNED,
FOREIGN KEY(Fuehrerschein11_ID) REFERENCES Fuehrerscheine(id),
F11_Gueltigkeit DATE,
Qualifikation1_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation1_ID) REFERENCES Qualifikationen(id),
Q1_Gueltigkeit DATE,
Qualifikation2_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation2_ID) REFERENCES Qualifikationen(id),
Q2_Gueltigkeit DATE,
Qualifikation3_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation3_ID) REFERENCES Qualifikationen(id),
Q3_Gueltigkeit DATE,
Qualifikation4_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation4_ID) REFERENCES Qualifikationen(id),
Q4_Gueltigkeit DATE,
Qualifikation5_ID INT UNSIGNED,
FOREIGN KEY(Qualifikation5_ID) REFERENCES Qualifikationen(id),
Q5_Gueltigkeit DATE
);

INSERT INTO Fahrer (RFID, Vorname, Nachname, Fuehrerschein1_ID, F1_Gueltigkeit, Qualifikation1_ID, Q1_Gueltigkeit, Qualifikation2_ID, Q2_Gueltigkeit)
VALUES ('00:00:00:00:00:00:00', 'Denis', 'Neumann', 1, '2028-02-07', 3, '2021-08-05', 4, '2022-04-12'),
('00:00:00:00:00:00:01', 'Staplerfahrer', 'Klaus', (SELECT id FROM Fuehrerscheine WHERE Klasse = "L"), '2025-05-05', (SELECT id FROM Qualifikationen WHERE Qualifikation = 'Schulung "Verkehrssicherheit auf dem Betriebsgelände"'), '2022-05-05', NULL, NULL),
('00:00:00:00:00:00:02', 'Ex-Staplerfahrer', 'Klaus', (SELECT id FROM Fuehrerscheine WHERE Klasse = "L"), '2020-05-05', (SELECT id FROM Qualifikationen WHERE Qualifikation = 'Schulung "Verkehrssicherheit auf dem Betriebsgelände"'), '2020-05-05', NULL, NULL)
;

INSERT INTO Fahrer
VALUES('04:4C:4D:52:17:3C:80', 'Marvin', 'Ehrich', 1, '2025-01-01', 2, '2025-01-01', 3, '2025-01-01', 4, '2025-01-01', 5, '2025-01-01', 6, '2025-01-01', 7, '2025-01-01', 8, '2025-01-01', 9, '2025-01-01', 10, '2025-01-01', 11, '2025-01-01', 1, '2025-01-01', 2, '2025-01-01', 3, '2025-01-01', 4, '2025-01-01', 5, '2025-01-01');

INSERT INTO Fahrzeuge (RFID, Kennzeichen, Bezeichnung, Fuehrerschein_ID)
VALUES('04:0D:4C:52:17:3C:81', 'F-ES 69', 'Geschäftswagen', (SELECT id FROM Fuehrerscheine WHERE Klasse = 'B'));

SELECT * FROM Fahrer;
SELECT * FROM Fuehrerscheine;
SELECT * FROM Fahrzeugklassen;
SELECT * FROM Fahrzeuge;
SELECT * FROM Qualifikationen;
