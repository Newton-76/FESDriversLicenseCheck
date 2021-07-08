# Deliverable-Overview

### Requirements Analysis

Requirements are stored in: \FESDriversLicenseCheck\Tasks\Requirements

### Design

The design is stored in: \FESDriversLicenseCheck\Tasks\Designs
A class diagram is stored in: \FESDriversLicenseCheck\Tasks\Diagrams

### Implementation

The Github environment and the foundation of the application has been organized
and implemented by Denis Neumann.
The setup of the application has been inspired by:
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/
- https://web.dev/
- https://www.youtube.com/watch?v=JQaL5YiSuqE (several videos of this series)

During the last weeks we worked on different parts.
Daniel implemented the NFC-Reader and met some technical issues in doing so.
Denis took care about the database, which is not yet able to be accessed via web browsers.
Eric transfered the different design patterns into HTML code.

We are now able to use data from a local MySQL server. We can handle the data
and compare the values.
There still needs to be implemented a way to add qualifications to the list.
Also we need to add the function of adding persons or vehicles to the database.

### Test

The functionality of the application as a progressive web application has been
tested by Denis using Lighthouse by Google Chrome.

Further progresses have not been possible to be tested successfully.

The MySQL database is now implemented via PHP and was tested by using a XAMPP
localhost. There have been several datasets that were printed on the console.

The RFID-Tag-Reader was tested using Github Pages.

### Status / grade of fulfillment of work products

- Requirements: 100%
- Design/Documentation: 90%
- Implementation: 99%
- Test: 90%

### Reviews

Reviews are stored in: \FESDriversLicenseCheck\Tasks\Reviews

### Lessons Learned

- Make sure to meet requirements before presenting the product
  => Driver's licenses are also equipped with a RFID-tag
- How to structure and organize the meeting with the customer
- Set to do's for scheduled meetings rather than making only general meetings, so there is a structured purpose to work towards.

- Requirements should be set up by more than 50% before starting the project
- The grade of fulfillment of the requirements shows how much of the requirements are understood, not implemented

- NFC-Scanners only work in HTTPS.
- PHP is incompatible with Github Pages.
- Discord should be installed and not used in web browsers.
- Scheduled meetings and more fixed deadlines.

### Who did what?

Daniel:
-  Supposed to test the RFID-Tag reader and let the app run on HTTPS (not done)
-  Help Eric with the design of the app (in progress)

Denis:
+   Create database (done)
+   Connect MySQL data with the app (done)
+   Make php code executable (done)
+   Compare drivers and vehicles (done)
+   Add new dirvers and vehicles to the database (done)
+   Find a way to implement and run the scanner and receive the tag's ID (done)
-   Edit datasets (in progress)
-   Connect functionality with design (in progress, will be done as soon as design is done)

Eric:
+   Test the RFID reading function on an Android device (done)
+   Check PIN code at login screen (done)
-   Design (in progress)
