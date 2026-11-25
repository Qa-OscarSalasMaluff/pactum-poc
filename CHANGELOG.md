# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-11-25

### Added
- Initial project structure.
- Configuration file for API base URLs (`config/urls.js`).
- Integration of PactumJS for API test automation.
- Integration of Jest as the test runner.
- Integration of Jest HTML Reporters for test reporting.
- GET test suite with HTTP status code validations.
- POST test suite with JSON payload validations.
- PUT test suite with JSON payload validations.
- Test case documentation organized by HTTP method.
- Jest configuration file (`jest.config.js`).
- Project documentation (`README.md`).
- Git version control configuration (`.gitignore`).

### Testing
- Initial API testing implementation using HTTPBin.
- Validation of HTTP response status codes.
- Validation of JSON response properties.
- Verification of HTTP request methods and payloads.

### Technical Notes
- HTTPBin is used as an HTTP inspection and response simulation service.
- POST and PUT requests validate HTTP communication and payload handling, not persistent CRUD operations.
- HTTP status codes such as 400, 401 and 404 are simulated through HTTPBin endpoints.