# ZeroVault Architecture

> This document describes the technical architecture of ZeroVault.

---

# Overview

ZeroVault follows a layered architecture with a clear separation between the user interface and the encryption engine.

```
+------------------------------------------------------+
|                  React + TypeScript                  |
|------------------------------------------------------|
| Pages                                                |
| Layouts                                              |
| Features                                             |
| Context                                              |
| Components                                           |
+------------------------------------------------------+
                     │
                     │ Tauri Commands
                     ▼
+------------------------------------------------------+
|                    Rust Backend                      |
|------------------------------------------------------|
| Encryption Engine                                    |
| File System                                          |
| Secure Delete                                        |
| Progress Reporting                                   |
+------------------------------------------------------+
                     │
                     ▼
              Operating System APIs
```

---

# Frontend Architecture

```
src/

components/
│
├── layout/
└── ui/

context/

features/

pages/

styles/

utils/
```

---

# Feature Structure

Every feature is self-contained.

Example

```
features/

dropzone/

components/

hooks/

types.ts

index.ts
```

Each feature owns:

- Components
- Hooks
- Types
- Helpers

---

# Data Flow

```
User

↓

React UI

↓

Context

↓

Feature Logic

↓

Tauri Command

↓

Rust

↓

Filesystem
```

The UI never accesses the filesystem directly.

---

# State Management

Current

React Context API

```
FileContext

↓

useFiles()

↓

Components
```

Future Contexts

- SettingsContext
- ThemeContext

---

# Current Application Flow

```
User

↓

Click Browse

↓

Native Dialog

↓

Selected Files

↓

React Context

↓

File List UI
```

Future

```
Password

↓

Encrypt

↓

Rust Command

↓

AES-256

↓

Encrypted Files
```

---

# Backend Responsibilities

Rust is responsible for

- Encryption
- Decryption
- File IO
- Secure Delete
- Progress Updates
- Error Handling

---

# Frontend Responsibilities

React is responsible for

- UI
- State
- Validation
- User Interaction

---

# Communication

React communicates with Rust only through Tauri Commands.

Example

```
invoke("encrypt_files")
```

No direct filesystem access from React.

---

# Folder Ownership

components/

Reusable UI

features/

Business logic

pages/

Page composition only

context/

Global state

styles/

Global styling

utils/

Shared utilities

---

# Current Feature Map

```
Drop Zone

↓

File Picker

↓

File Context

↓

File List

↓

Password

↓

Encryption Buttons
```

---

# Planned Architecture

```
Drop Zone

↓

Validation

↓

Password

↓

Encrypt Command

↓

Rust

↓

AES-256

↓

Progress Events

↓

Status Bar
```

---

# Design Principles

- Feature-first architecture
- Single responsibility
- Separation of concerns
- Thin pages
- Reusable UI
- Context for shared state
- Rust owns business logic
- React owns presentation

---

# Future Modules

Encryption Engine

Password Manager

Settings

Recent Files

Update Checker

Secure Delete

Folder Encryption

Logging

---

Last Updated

Sprint 4

Version

v0.2.0