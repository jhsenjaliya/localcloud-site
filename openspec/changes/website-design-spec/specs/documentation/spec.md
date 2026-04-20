## ADDED Requirements

### Requirement: Getting started guide
The documentation SHALL include a Getting Started guide at /docs/ that walks a developer from zero to first API call in under 5 minutes of reading. The guide SHALL cover: prerequisites (Docker), installation (`pip install localcloud` or direct Docker), starting LocalCloud (`localcloud start` or `docker run`), setting environment variables (`eval $(localcloud env)`), and making a first API call (GCS upload example in Python).

#### Scenario: Developer follows quickstart
- **WHEN** a developer reads the Getting Started guide and follows each step
- **THEN** they can successfully start LocalCloud and make an API call to Cloud Storage

### Requirement: CLI reference
The documentation SHALL include a CLI Reference page at /docs/cli listing all `localcloud` CLI commands: start, stop, status, env, seed, reset, logs, console, compose, gcloud_setup. Each command SHALL show its syntax, all flags/options with defaults, and at least one usage example.

#### Scenario: CLI command lookup
- **WHEN** a developer searches for how to use `localcloud seed`
- **THEN** the CLI Reference page shows the command syntax, flags, and an example of loading a seed file

### Requirement: Configuration reference
The documentation SHALL include a Configuration page at /docs/configuration listing all environment variables (LOCALCLOUD_PROJECT, LOCALCLOUD_SERVICES, LOCALCLOUD_SEED_FILE, LOCALCLOUD_DATA_DIR, LOCALCLOUD_IAM_MODE, per-service enable flags, JAVA_OPTS) with their types, defaults, and descriptions.

#### Scenario: Configuration lookup
- **WHEN** a developer needs to know how to disable a specific service
- **THEN** the Configuration page shows the `LOCALCLOUD_ENABLE_<SERVICE>` variable with its default and usage

### Requirement: Seed data format guide
The documentation SHALL include a Seed Data page at /docs/seed-data explaining the YAML seed file format. It SHALL cover seed structure for each supported service (GCS buckets/objects, Pub/Sub topics/subscriptions, Firestore documents, BigQuery datasets/tables, Secret Manager secrets, Memorystore keys) with a complete example seed file.

#### Scenario: Seed file creation
- **WHEN** a developer reads the Seed Data page
- **THEN** they can write a valid seed.yaml file that pre-populates data across multiple services

### Requirement: SDK examples page
The documentation SHALL include an SDK Examples page at /docs/sdk-examples with working code snippets for Python, Node.js, Go, and Java showing how to connect to LocalCloud services. Each example SHALL demonstrate connecting to at least Cloud Storage, Pub/Sub, and BigQuery.

#### Scenario: Python SDK example works
- **WHEN** a developer copies the Python GCS example and runs it against a running LocalCloud
- **THEN** the code executes successfully

### Requirement: Architecture overview
The documentation SHALL include an Architecture page at /docs/architecture with a diagram showing the Docker container internals: Armeria gateway, external emulators (fake-gcs-server, Google official emulators, BigQuery Python emulator), facade services, PostgreSQL, and port mappings. The diagram SHALL distinguish external emulators from built-in facades.

#### Scenario: Architecture is understandable
- **WHEN** a developer views the Architecture page
- **THEN** they understand which services use official Google emulators vs. LocalCloud facades, and how ports are mapped

### Requirement: Documentation sidebar navigation
The documentation section SHALL have a persistent left sidebar with collapsible sections: Getting Started, Services (expandable to 15 sub-items), CLI Reference, Configuration, Seed Data, SDK Examples, Architecture, and FAQ. The currently active page SHALL be highlighted. The sidebar SHALL be collapsible on mobile.

#### Scenario: Sidebar shows current location
- **WHEN** a developer is reading the BigQuery service page
- **THEN** the sidebar highlights "BigQuery" under the "Services" section with the section expanded

### Requirement: Code block features
All code blocks in documentation SHALL support syntax highlighting (bash, python, javascript, java, go, yaml, json), a copy-to-clipboard button, a language label, and optionally line numbers. Multi-tab code blocks SHALL be supported for showing the same operation in multiple languages.

#### Scenario: Multi-language code tabs
- **WHEN** a documentation page shows an SDK example
- **THEN** the user can switch between Python, Node.js, Go, and Java tabs to see the same operation in each language
