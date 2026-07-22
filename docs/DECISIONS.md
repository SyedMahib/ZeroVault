# ZeroVault Architecture Decision Records (ADRs)

> This document records significant architectural and technical decisions made during the development of ZeroVault.
>
> Every major architectural decision should be documented before or immediately after implementation.
>
> Format:
>
> - Decision ID
> - Status
> - Context
> - Decision
> - Rationale
> - Alternatives Considered
> - Consequences

---

# ADR-001

**Status:** Accepted

## Decision

Use **Tauri v2** instead of Electron.

## Context

ZeroVault requires a secure, lightweight desktop framework with excellent performance and low memory usage.

## Rationale

- Smaller application size
- Better runtime performance
- Native desktop integration
- Rust backend
- Lower memory consumption
- Better security model

## Alternatives Considered

- Electron
- Flutter Desktop
- Qt

## Consequences

- Requires learning Rust
- Smaller ecosystem than Electron
- Better long-term performance and security

---

# ADR-002

**Status:** Accepted

## Decision

Adopt a **Feature-First Architecture**.

## Context

As ZeroVault grows, organizing code by technical type (components, hooks, pages) would become difficult to maintain.

## Rationale

- Better scalability
- Easier feature isolation
- Improved maintainability
- Simpler onboarding for new developers and AI assistants

## Alternatives Considered

- Layer-based architecture
- MVC
- Domain-driven folders

## Consequences

- Slightly more folders
- Better long-term organization

---

# ADR-003

**Status:** Accepted

## Decision

Use **React Context API** for global state management.

## Context

The application currently has a small amount of shared state.

## Rationale

- Built into React
- No external dependency
- Easy to maintain
- Sufficient for current project size

## Alternatives Considered

- Redux Toolkit
- Zustand
- MobX

## Consequences

- Simple architecture
- Easy migration later if necessary

---

# ADR-004

**Status:** Accepted

## Decision

Use the native **Tauri Dialog Plugin** for file selection.

## Context

The application requires access to real filesystem paths for encryption.

## Decision

Use:

```
@tauri-apps/plugin-dialog
```

## Rationale

- Native operating system dialogs
- Cross-platform
- Returns real filesystem paths
- Better user experience

## Alternatives Considered

- HTML file input

## Consequences

- Requires Tauri permissions
- Consistent desktop behavior

---

# ADR-005

**Status:** Accepted

## Decision

Use **Native Tauri Drag & Drop** instead of HTML5 Drag & Drop.

## Context

HTML5 drag-and-drop does not provide reliable filesystem paths across platforms.

## Rationale

- Native desktop behavior
- Real filesystem paths
- Better integration with Tauri
- More reliable across operating systems

## Alternatives Considered

- HTML5 Drag & Drop

## Consequences

- Requires Tauri drag event API
- Better long-term reliability

---

# ADR-006

**Status:** Accepted

## Decision

File selections should be **additive**, not destructive.

## Context

Users often select files in multiple batches.

## Decision

Every new selection is appended to the existing file list.

Duplicate files are ignored.

## Rationale

Matches professional desktop applications such as:

- 7-Zip
- WinRAR
- VeraCrypt

## Alternatives Considered

Replace the previous file list completely.

## Consequences

- Better user experience
- Requires duplicate detection

---

# ADR-007

**Status:** Accepted

## Decision

Prevent duplicate files using **absolute filesystem paths**.

## Context

Users may accidentally select the same file multiple times.

## Rationale

Absolute paths uniquely identify files.

Simple comparison.

Fast lookup.

## Alternatives Considered

- File names
- File hashes

## Consequences

- Lightweight implementation
- Same file cannot appear twice

---

# ADR-008

**Status:** Accepted

## Decision

Keep UI components **presentational**.

## Context

Mixing business logic into UI components makes maintenance difficult.

## Rationale

Business logic belongs inside hooks.

Components should focus only on rendering.

## Alternatives Considered

Logic inside components.

## Consequences

- Better separation of concerns
- Easier testing
- Improved readability

---

# ADR-009

**Status:** Accepted

## Decision

All cryptographic operations must be implemented in **Rust**.

## Context

Encryption is security-critical.

## Rationale

- Better performance
- Better memory safety
- Stronger security
- Separation of concerns

React is responsible only for UI.

## Alternatives Considered

JavaScript crypto libraries

## Consequences

- Rust becomes the trusted backend
- Frontend never handles encryption directly

---

# ADR-010

**Status:** Accepted

## Decision

Use **documentation-first development**.

## Context

ZeroVault is intended to be a long-term project that may be continued by different developers or AI assistants.

## Rationale

Every completed sprint updates:

- README.md
- CHANGELOG.md
- PROJECT_BIBLE.md
- AI_CONTEXT.md
- ARCHITECTURE.md
- API.md
- DECISIONS.md

This ensures documentation always reflects the current implementation.

## Alternatives Considered

Updating documentation only before releases.

## Consequences

- Documentation remains accurate
- Easier onboarding
- Better collaboration
- Reduced technical debt

---

# Future ADRs

Examples of future decisions that should be recorded:

- Encryption algorithm selection (AES-256-GCM vs XChaCha20-Poly1305)
- Password hashing algorithm (Argon2id, PBKDF2, scrypt)
- Secure delete strategy
- Encrypted file format specification
- Automatic update mechanism
- Logging strategy
- Recent files implementation
- Settings storage
- Theme management

---

Last Updated

Sprint 5 Complete

Version

v0.2.0