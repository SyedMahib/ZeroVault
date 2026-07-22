# ZeroVault Architecture

> This document defines the technical architecture of ZeroVault.
>
> It describes how the application is organized, how data flows through the system, and the responsibilities of each layer.

---

# Architecture Overview

ZeroVault follows a layered architecture with a strict separation between the presentation layer and the backend encryption engine.

```
┌─────────────────────────────────────────────────────────────┐
│                    React + TypeScript                       │
│─────────────────────────────────────────────────────────────│
│ App                                                        │
│ Layout                                                     │
│ Shared Components                                           │
│ Feature Modules                                             │
│ Context API                                                 │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ invoke()
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                       Tauri Bridge                          │
│─────────────────────────────────────────────────────────────│
│ Commands                                                    │
│ Events                                                      │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                        Rust Backend                         │
│─────────────────────────────────────────────────────────────│
│ Encryption Engine                                           │
│ File System                                                 │
│ Secure Delete                                               │
│ Progress Reporting                                          │
│ Error Handling                                              │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
                    Operating System APIs
```

---

# Frontend Architecture

```
src/
│
├── app/
│
├── assets/
│
├── components/
│   ├── layout/
│   └── ui/
│
├── context/
│   └── FileContext.tsx
│
├── features/
│   ├── dropzone/
│   ├── file-list/
│   ├── password/
│   └── status-bar/
│
├── hooks/
│
├── styles/
│
├── types/
│
└── utils/
```

---

# Feature Architecture

ZeroVault follows a **Feature-First Architecture**.

Every feature owns its own implementation.

Example

```
features/
│
├── dropzone/
│   ├── components/
│   ├── hooks/
│   ├── types.ts
│   └── index.ts
```

Each feature may contain:

- Components
- Hooks
- Types
- Helpers
- Feature exports

Business logic belongs inside hooks.

UI components remain presentational.

---

# Current Data Flow

## File Picker

```
User
    │
    ▼
Browse Button
    │
    ▼
Tauri Dialog Plugin
    │
    ▼
useFilePicker()
    │
    ▼
addFiles()
    │
    ▼
FileContext
    │
    ▼
FileListCard
```

---

## Drag & Drop

```
User
    │
    ▼
Native Tauri Drag Event
    │
    ▼
useDragDrop()
    │
    ▼
addFiles()
    │
    ▼
FileContext
    │
    ▼
FileListCard
```

---

# Future Encryption Flow

```
User
    │
    ▼
Select Files
    │
    ▼
Password Validation
    │
    ▼
Encrypt Button
    │
    ▼
invoke("encrypt_files")
    │
    ▼
Rust Backend
    │
    ▼
AES-256 Encryption
    │
    ▼
Encrypted Files
    │
    ▼
Status Update
```

---

# State Management

Current global state is managed using **React Context API**.

Current Context

```
FileContext
```

Current Responsibilities

- Selected Files
- Open Native File Picker
- Add Files
- Remove File
- Clear All Files

Future Contexts

- SettingsContext
- ThemeContext (optional)

Redux or Zustand will not be introduced unless the application grows significantly.

---

# Backend Responsibilities

Rust is responsible for:

- AES-256 Encryption
- AES-256 Decryption
- File IO
- Secure Delete
- Progress Reporting
- Error Handling
- Performance-Critical Operations

---

# Frontend Responsibilities

React is responsible for:

- User Interface
- User Interaction
- Global State
- Validation
- Progress Display
- Invoking Rust Commands

The frontend must never perform cryptographic operations.

---

# Communication Layer

The frontend communicates with Rust only through **Tauri Commands**.

Example

```ts
await invoke("encrypt_files", {
  paths,
  password,
});
```

Future progress updates will use **Tauri Events**.

Example

```
Rust
    │
emit()
    │
    ▼
React Listener
    │
    ▼
Progress Bar
```

---

# Folder Responsibilities

## app/

Application bootstrap.

---

## components/

Reusable shared UI.

---

## context/

Global shared state.

---

## features/

Feature-specific logic.

---

## hooks/

Shared reusable hooks.

---

## styles/

Global styling and design tokens.

---

## utils/

Framework-independent helper functions.

---

## types/

Shared application-wide TypeScript types.

---

# Current Feature Map

```
Drop Zone
      │
      ▼
Native File Picker
      │
      ▼
Native Drag & Drop
      │
      ▼
FileContext
      │
      ▼
File List
      │
      ▼
Password Card
      │
      ▼
Action Buttons
      │
      ▼
Status Bar
```

---

# Planned Feature Map

```
Drop Zone
      │
      ▼
Password Validation
      │
      ▼
Encrypt Button
      │
      ▼
Rust Command
      │
      ▼
AES-256 Engine
      │
      ▼
Progress Events
      │
      ▼
Encrypted Output
```

---

# Design Principles

- Feature-First Architecture
- Single Responsibility Principle
- Separation of Concerns
- Thin Components
- Presentational UI
- Business Logic in Hooks
- Shared State through Context API
- Rust owns business logic
- React owns presentation
- Maintainability over cleverness

---

# Planned Modules

Core

- Encryption Engine
- Decryption Engine

Security

- Password Validation
- Password Generator
- Secure Delete

Application

- Settings
- Recent Files
- Update Checker

Utilities

- Folder Encryption
- Progress Tracking
- Logging

---

# Architecture Status

## Completed

- ✅ Feature-First Architecture
- ✅ Shared FileContext
- ✅ Native File Picker
- ✅ Native Drag & Drop
- ✅ File Management Workflow

## In Progress

- 🔄 Password Validation

## Planned

- ⏳ Rust Commands
- ⏳ AES-256 Encryption
- ⏳ AES-256 Decryption
- ⏳ Progress Events
- ⏳ Settings

---

Last Updated

Sprint 5 Complete

Version

v0.2.0