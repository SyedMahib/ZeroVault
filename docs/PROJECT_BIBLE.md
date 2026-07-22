# ZeroVault Project Bible

> This document is the single source of truth for the ZeroVault project.
>
> Every architectural, technical, and design decision must be recorded here before implementation.

---

# Project Overview

## Project Name

ZeroVault

## Purpose

ZeroVault is a modern, privacy-first desktop application for securely encrypting and decrypting files using AES-256 encryption.

The application is designed to work completely offline. No user data is uploaded to any server.

---

# Vision

Create a fast, secure and beautiful desktop encryption application that feels native on Windows, macOS and Linux while maintaining professional software engineering practices.

---

# Core Stack

## Frontend

- React
- TypeScript
- Vite

## Desktop Framework

- Tauri v2

## Backend

- Rust

## Styling

- CSS
- CSS Variables

## Icons

- Lucide React

## Version Control

- Git
- GitHub

---

# Development Principles

## 1. Feature-first Architecture

Every feature owns its own:

- components
- hooks
- types
- index.ts

Example

```
features/
    dropzone/
    file-list/
    password/
    encryption/
```

Business logic stays inside hooks.

UI components remain presentational.

---

## 2. UI Components

Reusable UI belongs inside

```
components/ui
```

Feature-specific components remain inside each feature.

---

## 3. Global State

Shared application state uses React Context API.

Current Contexts

- FileContext

Future Contexts

- SettingsContext

Redux or Zustand will not be introduced unless absolutely necessary.

---

## 4. Styling

Global CSS

Component CSS

CSS Variables

Rules

- No inline styles
- No CSS frameworks after setup
- Prefer semantic class names
- Keep styling separated from logic

---

## 5. Import Rules

Always use aliases.

Correct

```ts
import { useFiles } from "@/context/FileContext";
```

Avoid

```ts
../../../components
```

---

## 6. Naming Convention

Components

PascalCase

```
DropZoneCard.tsx
```

Hooks

camelCase beginning with use

```
useFilePicker.ts
```

Contexts

PascalCase

```
FileContext.tsx
```

CSS Classes

kebab-case

```
dropzone-card
```

---

# Current Features

## UI

Completed

- Header
- Drop Zone
- File List
- Password Card
- Action Buttons
- Status Bar
- Responsive Layout

---

## File Management

Completed

- Native Tauri File Picker
- Native Tauri Drag & Drop
- Multiple File Selection
- Additive File Selection
- Duplicate Prevention
- Remove Individual File
- Clear All Files
- Shared FileContext
- Automatic UI Updates

---

# Current Application Flow

## File Picker

```
User
   │
   ▼
Native Tauri Dialog
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

# Technical Decisions

## Native File Picker

Decision

Use

```
@tauri-apps/plugin-dialog
```

Reason

- Native OS experience
- Cross-platform
- Real filesystem paths

---

## Native Drag & Drop

Decision

Use native Tauri drag events.

Do not use HTML5 Drag & Drop.

Reason

Encryption requires actual filesystem paths.

---

## State Management

Decision

React Context API

Reason

Current application complexity does not justify Redux or Zustand.

---

## File Selection

Decision

Selecting files multiple times appends new files.

Duplicate files are ignored using absolute file paths.

Reason

Matches professional desktop applications.

---

## Password

Current

UI placeholder only.

Planned

- Password validation
- Show / Hide Password
- Password Strength Meter
- Password Generator

---

## Encryption

Status

Not yet implemented.

Future

AES-256 encryption implemented entirely in Rust.

React never performs encryption.

---

# Responsibilities

## React

Responsible for

- UI
- State Management
- User Interaction
- Validation
- Progress Display

---

## Rust

Responsible for

- Encryption
- Decryption
- File IO
- Secure Delete
- Progress Reporting

---

# Current Folder Structure

```
src/
│
├── app/
├── assets/
├── components/
├── context/
│   └── FileContext.tsx
├── features/
│   ├── dropzone/
│   ├── file-list/
│   ├── password/
│   └── status-bar/
├── hooks/
├── styles/
├── types/
└── utils/

src-tauri/
│
├── capabilities/
├── src/
└── tauri.conf.json
```

---

# Git Workflow

Every completed sprint must end with

- Documentation update
- Git commit
- Changelog update
- Project Bible update
- AI Context update

Commit format

```
feat:
fix:
docs:
refactor:
style:
test:
chore:
```

---

# Completed Milestones

✅ Project Foundation

✅ Design System

✅ Main UI

✅ Native File Picker

✅ Native Drag & Drop

✅ File Management

---

# Current Sprint

## Sprint 6

Goal

Implement password validation system.

---

# Future Sprints

Sprint 6

- Password Validation
- Password Strength Meter

Sprint 7

- Rust Commands
- Backend Communication

Sprint 8

- AES-256 Encryption

Sprint 9

- AES-256 Decryption

Sprint 10

- Progress Tracking

Sprint 11

- Settings

Sprint 12

- Release Candidate

---

# Development Rules

1. No business logic inside UI components.

2. No relative imports.

3. Every feature owns its own components and hooks.

4. Keep components presentational.

5. Put reusable logic inside hooks.

6. Rust handles encryption.

7. React handles UI.

8. Every sprint ends with:
   - Documentation update
   - Git commit
   - Changelog update
   - Project Bible update
   - AI Context update

9. Every architectural decision must be documented before implementation.

10. Prefer maintainability over cleverness.

11. UI changes must never break business logic.

12. New AI assistants should read this document before making project changes.

---

# Current Version

Version

v0.2.0

Status

Active Development

Last Updated

Sprint 5 Complete