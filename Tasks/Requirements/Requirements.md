//Author: Denis Neumann, 1308358

# Requirements:

## 1. Log-In
  In this step, the representative of the company has the opportunity to log in
with this user-name and a general administrator-PIN. Without a login there will
be no opportunity to edit any datasets or scan the RFID-tags.

## 2. Database
  The SQL-database includes datasets of all vehicles and of every driver in the
company.

## 2.1 Key Management
  The key datasets contain information about the associated vehicles and the
required licenses and qualifications, that are needed to legitimately drive
that vehicle.

## 2.2 Driver Management
  The driver datasets contain information about the driver's licenses and the
qualifications of the driver. They also include as well the validity as the
expiring date of both.

## 3. RFID-Scan
  The application shall be able to read the RFID-tags and tell the system the
ID-number of the vehicle or the driver.

## 4. Comparison of scanned datasets
  Compares the valid license and qualification of the driver to the required
qualifications for the recognized vehicle.
