# ZeroVault AI Context

> This document is the primary onboarding guide for AI assistants working on ZeroVault.
>
> Always read this file and `PROJECT_BIBLE.md` before making architectural or implementation changes.
>
> The goal is to maintain consistency, scalability, and long-term maintainability.

---

# Project

## Name

ZeroVault

## Description

ZeroVault is a modern, privacy-first desktop application built with **Tauri v2**, **React**, **TypeScript**, and **Rust** for securely encrypting and decrypting files using **AES-256 encryption**.

The application is completely offline.

No cloud.

No telemetry.

No user accounts.

The React frontend is responsible for the UI and user interaction, while Rust performs all cryptographic and filesystem operations.

---

# Current Status

## Version

v0.2.0

## Development Progress

Approximately **40% Complete**

## Current Sprint

**Sprint 6 — Password Validation**

---

# Completed Features

## UI

- Header
- Drop Zone
- File List
- Password Card (UI)
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
- Remove Individual Files
- Clear All Files
- Shared FileContext
- Automatic UI Updates

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite

## Desktop

- Tauri v2

## Backend

- Rust

## Styling

- CSS
- CSS Variables

## Icons

- Lucide React

## State Management

- React Context API

---

# Current Architecture

The project follows a **Feature-First Architecture**.

Every feature owns:

- components
- hooks
- types
- index.ts

Example

```
src/

features/

    dropzone/
        components/
        hooks/
        types.ts
        index.ts

    file-list/
        components/
        hooks/
        types.ts
        index.ts

    password/
        components/
        hooks/
        types.ts
        index.ts
```

Business logic belongs inside hooks.

UI components remain presentational.

---

# Folder Responsibilities

## components/

Reusable shared UI.

## context/

Global application state.

Current

- FileContext

Future

- SettingsContext

---

## features/

Every feature owns its own logic.

Do not place feature logic elsewhere.

---

## utils/

Reusable helper functions.

No React code.

---

## styles/

Global styling and design tokens.

---

# Current File Flow

## Native File Picker

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

## Native Drag & Drop

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

# Current State Management

Global state uses **React Context API**.

Current Context

- FileContext

FileContext currently manages:

- files
- openFilePicker()
- addFiles()
- removeFile()
- clearFiles()

Do not introduce Redux or Zustand without explicit approval.

---

# Styling Rules

Use

- Global CSS
- CSS Variables
- Component CSS

Do NOT use

- Inline styles
- CSS-in-JS
- Tailwind utility classes mixed with component-specific CSS (unless intentionally adopted later)

---

# Import Rules

Always use aliases.

Correct

```ts
import { useFiles } from "@/context/FileContext";
```

Avoid

```ts
../../../context/FileContext
```

---

# Naming Convention

## Components

PascalCase

```
DropZoneCard.tsx
```

## Hooks

camelCase beginning with use

```
useFilePicker.ts
```

## Context

PascalCase

```
FileContext.tsx
```

## CSS

kebab-case

```
dropzone-card
```

---

# Current Technical Decisions

- Native dialogs use **@tauri-apps/plugin-dialog**
- Native drag-and-drop uses **Tauri Webview drag events**
- Multiple file selections append to the existing list
- Duplicate files are prevented using absolute file paths
- React Context API manages global state
- Encryption will be implemented entirely in Rust
- React must never perform cryptographic operations

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

# Code Style

- Functional React Components only
- Strict TypeScript
- Prefer composition over inheritance
- Keep components small
- Business logic belongs inside hooks
- Prefer reusable code
- Remove unused code
- Keep files focused on a single responsibility

---

# AI Guidelines

If you are an AI working on ZeroVault:

## DO

- Read `PROJECT_BIBLE.md` before making architectural changes
- Preserve Feature-First Architecture
- Keep components presentational
- Keep business logic inside hooks
- Use FileContext for global file management
- Use existing path aliases (`@/`)
- Follow existing naming conventions
- Prefer extending existing code over rewriting it
- Keep documentation synchronized with code changes

---

## DON'T

- Do not restructure folders without approval
- Do not replace Context API with Redux/Zustand
- Do not introduce unnecessary dependencies
- Do not move encryption logic into React
- Do not use relative imports
- Do not duplicate existing logic
- Do not break the current UI architecture

---

# Documentation Policy

Every completed sprint must update:

- README.md
- CHANGELOG.md
- PROJECT_BIBLE.md
- AI_CONTEXT.md
- ARCHITECTURE.md (if architecture changes)
- DECISIONS.md (if new architectural decisions are made)

---

# Current Roadmap

## Completed

- ✅ Project Setup
- ✅ Design System
- ✅ Main UI
- ✅ Native File Picker
- ✅ Native Drag & Drop
- ✅ File Management

---

## In Progress

Sprint 6

- Password Validation
- Password Strength Meter

---

## Planned

Sprint 7

- Rust Commands
- Frontend ↔ Rust Communication

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

# Current Objective

The next milestone is implementing a secure password workflow before integrating the Rust encryption engine.

Priority order:

1. Password Validation
2. Password Strength Meter
3. Rust Commands
4. AES-256 Encryption
5. AES-256 Decryption
6. Progress Tracking
7. Settings

---

Last Updated

Sprint 5 Complete

Version

v0.2.0