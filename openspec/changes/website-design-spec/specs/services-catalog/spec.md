## ADDED Requirements

### Requirement: Services catalog page
The site SHALL include a Services Catalog page at /services displaying all 15 emulated GCP services in a filterable grid. Each service card SHALL show: service name, GCP icon/logo, emulation type (External Emulator or Facade), protocol (gRPC/REST/RESP2), port number, and enabled-by-default status. The grid SHALL be filterable by emulation type and protocol.

#### Scenario: All services listed
- **WHEN** a user navigates to /services
- **THEN** all 15 services are displayed: Cloud Storage, Pub/Sub, Firestore, BigQuery, Spanner, Bigtable, Secret Manager, Cloud Tasks, Cloud Logging, Cloud Monitoring, Memorystore, Cloud Workflows, GKE, Compute Engine, Cloud Run

#### Scenario: Filter by emulation type
- **WHEN** a user selects the "External Emulator" filter
- **THEN** only services using external emulators are shown (GCS, Pub/Sub, Firestore, BigQuery, Spanner, Bigtable)

### Requirement: Per-service detail pages
Each of the 15 services SHALL have a detail page at /services/[slug] containing: service description, connection details (port, protocol, environment variable), support matrix (supported features vs. not-yet-supported features), configuration options, a quickstart code snippet, and links to relevant GCP documentation.

#### Scenario: BigQuery detail page
- **WHEN** a user navigates to /services/bigquery
- **THEN** the page shows BigQuery's port (9050/9060), protocol (REST + gRPC), supported features (~95% Standard SQL, 120+ functions, JOINs, CTEs, window functions, UNNEST, PIVOT, external tables, Storage API, INFORMATION_SCHEMA), unsupported features (scripting, stored procedures, BQML, geography functions), and a Python quickstart snippet

#### Scenario: Service page shows connection info
- **WHEN** a user views any service detail page
- **THEN** the environment variable needed to connect (e.g., `BIGQUERY_EMULATOR_HOST=http://localhost:9050`) is prominently displayed with a copy button

### Requirement: Support matrix table
Each service detail page SHALL include a support matrix formatted as a two-column table: "Supported" (with checkmarks) and "Not Yet Supported" (with planned/not-planned indicators). The matrix SHALL accurately reflect the current emulation coverage.

#### Scenario: Support matrix accuracy
- **WHEN** a developer checks the Cloud Storage support matrix
- **THEN** it shows supported (Bucket CRUD, object upload/download/list/delete/copy, metadata) and not-yet-supported (versioning, lifecycle execution, CMEK) with accurate information matching the project spec

### Requirement: Service data sourced from structured file
Service catalog data (names, ports, protocols, supported features, etc.) SHALL be sourced from a structured data file (YAML or JSON) within the website repository, not hardcoded in page templates. This enables easy updates when service coverage changes.

#### Scenario: Adding a new feature to a service
- **WHEN** a maintainer updates the services data file to add a new supported feature
- **THEN** the change is reflected on the service detail page after the next build without modifying any template code
