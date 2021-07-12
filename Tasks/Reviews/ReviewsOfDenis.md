## Deliverable 1


### Daniel (Design)

Took care of the design evaluation. In the first step he had an error in
formatting the plus and minus symbols in the .md file.
There are still a lot of spelling mistakes, especially considering the upper
and lower case spelling.

### Eric (Documentary and Sketches)

Has already done a little sketch of the program's user interface using adobe XD,
but didn't quite meet the requirements with it. Those errors have been corrected
in the meantime.

### Nawid (Sketches)

Unfortunately he left the group, but before he did so, he supported us with a
few sketches, that may be used in the future process of the project.

## Deliverable 2

### NFC-Reader

In the beginning of Phase 2 of our project, I tried to implement a NFC reader,
to scan the RFID tags. Unfortunately I realized very soon, that using the NFC
reader via a Progressive Web Application is not possible on an Apple device.
From that moment on I dealt with the database and Daniel took care of the NFC
reader.
Until now there is not much to review, because he could also not find a
fitting solution yet. (We want to consult with Mr. Liebehenschel and maybe also
with another group, that already got the reader working)

### Implementation of the Design

Eric presented his progress in implementing his design suggestions in the
application.
So far it looks a little bit unstructured, but Eric also said, that he is still
working with it and tries to figure out how HTML actually works.
Also i would rather recommend to implement the button functions in JavaScript
rather than in HTML.
Another suggestion would be to use the cascading style sheets to design the
on screen items.

## Deliverable 3

### Implementation of the Design

There are too many HTML pages. They are not necessary, as the scanned person
or vehicle shouldn't be displayed anyways.
The icons should be chosen wisely.
I think it's better to use JavaScript for some functions of the buttons instead
of just linking another HTML page to it.

### MySQL

Node.js is a way to use MySQL in JavaScript, but it's not available on web-browsers
and mobile devices.
MySQL is not compatible with JavaScript directly, but there is a way to translate datasets
via PHP into JavaScript arrays.

### NFC-Reader

In the beginning we tried to run a NFC-Reader on an iPhone and also via HTTP
connections.
In the meantime we found out, that we need to use a secure connection via
HTTPS and an Android phone that's able to read NFC-Tags.
The most simple way to do so is using Github-pages.

## Deliverable 4

### Design

There is still an issue with the icons, they should be changed to meaningful icons,
for example should there be a person and a vehicle instead of a person and a credit
card.
Also there is a wrong icon on the top bar, because creating new qualifications
shouldn't be represented by a human body.
The forms to enter the data of new datasets are just prototypes. They were created
last minute, as the task hasn't done by the responsive person. There is a lot to beautify.

### MySQL

There may be a better solution in the database, than creating a column for each single
qualification. But as a person is supposed to be capable of having all driver's licenses
and all qualifications possible, this is at least a solution that works.

### NFC-Reader

Unfortunately there hasn't been a lot of opportunities for me to test the functionality
of the reader, otherwise I may have found a better solution than touching a button
to start the scanning function.
