# LeapWise Global Consulting — Temporary Holding Website

This package is ready for a simple GitHub Pages deployment.

## Files to upload

Upload the CONTENTS of this folder to the root of the GitHub repository:

- `index.html`
- `privacy.html`
- `404.html`
- `robots.txt`
- `.nojekyll`
- the entire `assets` folder

Do not upload only the outer ZIP file to the repository. Extract it first.

## The one file to edit

Open:

`assets/site-config.js`

Add the business email address:

```javascript
email: "hello@yourdomain.co.uk",
```

Optional legal details can be added in the same file:

```javascript
companyNumber: "12345678",
registeredIn: "England and Wales",
registeredOffice: "FULL REGISTERED OFFICE ADDRESS"
```

Leave optional values blank if they are not ready.

## Important

The temporary website is intentionally marked `noindex`, and `robots.txt`
asks search engines not to crawl it. Remove those restrictions when replacing
the holding page with the finished public website.

The site does not use a form, external font, analytics library or advertising
cookie. Email links only appear after an email address is added to
`assets/site-config.js`.
