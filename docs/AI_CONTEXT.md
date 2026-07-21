# ZeroVault AI Context

**Purpose:** This document provides essential project context for AI assistants joining the project in a new conversation.

---

## Project Information

**Project Name:** ZeroVault

**Current Version:** 0.0.1

**Project Type:** Offline Desktop Encryption Application

---

## Mission

ZeroVault allows users to securely encrypt and decrypt files and folders entirely offline using modern, industry-standard cryptography.

No user data is uploaded.

No passwords are stored.

Privacy is the highest priority.

---

## Technology Stack

Frontend

- React
- TypeScript
- Vite

Desktop

- Tauri

Backend

- Rust

Version Control

- Git
- GitHub

Operating System

- Xubuntu Linux

---

## Development Philosophy

- Security before convenience.
- Never invent cryptography.
- Prefer audited libraries.
- Every dependency must be justified.
- Keep architecture modular.
- Documentation is part of development.
- AI-generated code must be reviewed before merging.

---

## Coding Style

### TypeScript

- camelCase variables
- PascalCase React components
- Functional components only
- Strong typing whenever practical

### Rust

- snake_case functions
- Modules organized by responsibility
- Avoid unnecessary cloning
- Prefer Result over panic

---

## Git Workflow

Branch

main

Commit Style

feat:
fix:
docs:
refactor:
test:
chore:

Every commit must leave the project in a working state.

---

## Current Sprint

Sprint 2

Architecture & Documentation

---

## Immediate Goals

- Complete documentation
- Design architecture
- Design encryption pipeline
- Design UI
- Build encryption engine

---

## Important Rules

Passwords are never stored.

Files never leave the user's computer.

Encryption keys only exist in RAM while required.

ZeroVault must remain offline-first.

---

End of AI Context.