# ZeroVault Project Bible

> This document is the single source of truth for the ZeroVault project.
>
> Every architectural, technical, and design decision must be recorded here before implementation.

---

# Project Overview

Project Name

ZeroVault

Purpose

A modern cross-platform desktop application for securely encrypting and decrypting files using AES-256 encryption.

---

# Core Stack

Frontend

- React
- TypeScript
- Vite

Desktop Framework

- Tauri v2

Backend

- Rust

Icons

- Lucide React

Version Control

- Git
- GitHub

---

# Development Principles

## 1. Feature-first Architecture

The application follows a feature-based folder structure.

Example

```
features/
    dropzone/
    file-list/
    password/
    encryption/
```

No business logic should live inside pages.

---

## 2. UI Components

Reusable UI components belong inside

```
components/ui
```

Feature-specific components belong inside each feature.

---

## 3. Global State

Global shared state uses

React Context API

Current Contexts

- FileContext

Future

- SettingsContext

Redux or Zustand will not be introduced unless the project complexity requires it.

---

## 4. Styling

Global CSS

Component CSS

CSS Variables

No inline styles.

No CSS frameworks after the initial setup.

---

## 5. Import Rules

Always use aliases.

Correct

```
import { useFiles } from "@/context/FileContext";
```

Avoid

```
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

CSS

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

---

## File Management

Completed

- Native Tauri File Picker
- Multiple file selection
- Additive file selection
- Duplicate prevention
- Remove file
- Clear all files

---

# Technical Decisions

## Native File Picker

Decision

Use

```
@tauri-apps/plugin-dialog
```

Reason

Native OS experience.

Cross-platform.

---

## State Management

Decision

React Context API.

Reason

Current application size does not justify Redux or Zustand.

---

## File Selection

Decision

Selecting files multiple times appends new files instead of replacing previous selections.

Duplicate files are ignored.

Reason

Matches professional desktop applications.

---

## Password

Current

Single password input.

Future

- Show / Hide password
- Strength indicator
- Password generator

---

## Encryption

Planned

AES-256

Implemented in Rust.

Frontend never performs encryption.

---

## Rust Responsibilities

Rust owns

- Encryption
- Decryption
- File IO
- Secure delete
- Progress reporting

React owns

- UI
- State
- User interaction

---

# Current Folder Structure

```
src/

components/
context/
features/
layouts/
pages/
styles/
utils/

src-tauri/

capabilities/
src/
```

---

# Git Workflow

Commit after every completed sprint.

Commit style

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

✅ Foundation

✅ UI System

✅ Native File Picker

✅ File Management

---

# Current Sprint

Sprint 5

Goal

Implement drag & drop support.

---

# Future Sprints

Sprint 6

Password validation.

Sprint 7

Rust commands.

Sprint 8

AES-256 encryption.

Sprint 9

AES-256 decryption.

Sprint 10

Progress tracking.

Sprint 11

Settings.

Sprint 12

Release Candidate.

---

# Rules

1. No business logic inside pages.

2. No relative imports.

3. Every feature has its own folder.

4. Every sprint ends with

- Documentation update
- Git commit
- Project Bible update

5. Every architectural decision must be documented before implementation.

6. Prefer maintainability over cleverness.

7. UI changes should not break business logic.

---

Last Updated

Sprint 4

Version

v0.2.0