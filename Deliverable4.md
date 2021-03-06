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

The basic function of the application is implemented.
Functions like editing and deleting datasets are not done yet.

### Test

The functionality of the application as a progressive web application has been
tested by Denis using Lighthouse by Google Chrome.

Further progresses have not been possible to be tested successfully.

The MySQL database is now implemented via PHP and was tested by using a XAMPP
localhost. There have been several datasets that were printed on the console.

The RFID-Tag-Reader was tested using Github Pages.

Everything is running on a XAMPP server now. The functions using the RFID tags
have only been tested rarely.

### Status / grade of fulfillment of work products

- Requirements: 100%
- Design/Documentation: 50%
- Implementation: 90%
- Test: 70%

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

- There is more to design than expected.
- Vehicles should be defined in an external table.
- Predicting and guessing the state of the project is not as easy as expected.

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
+   Write installation instruction (done)
+   Connect functionality with design (done)
-   Edit datasets (in progress)

Eric:
+   Test the RFID reading function on an Android device (done)
+   Check PIN code at login screen (done, but no logout)
-   Design (in progress)
