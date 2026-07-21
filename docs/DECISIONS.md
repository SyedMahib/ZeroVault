# ZeroVault Architecture Decision Records (ADRs)

This document records significant architectural and technical decisions made during the development of ZeroVault.

Each decision should include:
- Decision ID
- Status
- Context
- Decision
- Rationale
- Alternatives Considered
- Consequences

---

# ADR-001

**Status:** Accepted

## Decision

Use Tauri instead of Electron.

## Context

ZeroVault requires a secure, lightweight desktop framework with excellent performance and low memory usage.

## Rationale

- Smaller application size
- Better runtime performance
- Native desktop integration
- Rust backend
- Lower memory consumption

## Alternatives Considered

- Electron
- Flutter Desktop
- Qt

## Consequences

- Requires learning Rust
- Smaller ecosystem than Electron
- Better long-term performance and security

---

Future decisions will follow this format.