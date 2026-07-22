# ZeroVault AI Context

> This document provides context for AI assistants working on ZeroVault.
>
> Read this file before making architectural or implementation changes.

---

# Project

Name

ZeroVault

Description

ZeroVault is a cross-platform desktop application built with Tauri v2, React, TypeScript, and Rust for secure AES-256 file encryption and decryption.

---

# Current Progress

Version

v0.2.0

Progress

Approximately 35%

Current Sprint

Sprint 5

---

# Tech Stack

Frontend

- React
- TypeScript
- Vite

Desktop

- Tauri v2

Backend

- Rust

Icons

- Lucide React

State

- React Context API

---

# Architecture

Feature-first architecture.

Example

src/

features/
dropzone/
file-list/
password/
encryption/

Business logic belongs inside features.

Pages should remain thin.

---

# Styling

Global CSS

CSS Variables

Component CSS

No inline styles.

No CSS-in-JS.

---

# Import Rules

Always use

```
@/
```

Never use long relative imports.

Correct

```
@/context/FileContext
```

Incorrect

```
../../../context/FileContext
```

---

# Current Features

Completed

- Native file picker
- Multi-file selection
- Duplicate prevention
- Remove file
- Clear all files
- Desktop UI

Not Started

- Drag & Drop
- Password validation
- Encryption
- Decryption

---

# File Management Rules

Multiple selections append.

Duplicate files are ignored.

Removing files updates state immediately.

Clear All removes every selected file.

---

# State Management

Current

React Context API

Context

FileContext

Avoid introducing Redux or Zustand unless approved.

---

# Rust Responsibilities

Rust owns

- Encryption
- Decryption
- File IO
- Secure delete

React owns

- UI
- State
- User interaction

---

# Code Style

Functional React Components only.

Strict TypeScript.

No unused code.

Prefer composition.

Prefer reusable components.

---

# Naming

Components

PascalCase

Hooks

useSomething

Contexts

SomethingContext

CSS

kebab-case

---

# Important Decisions

- Native dialogs use @tauri-apps/plugin-dialog.
- File picker supports multiple selections.
- New selections append to the existing list.
- Duplicate files are prevented.
- React Context API is the global state solution.
- Encryption will be implemented entirely in Rust.
- React never performs cryptographic operations.

---

# Documentation Policy

Every completed sprint updates:

- README.md
- CHANGELOG.md
- PROJECT_STATUS.md
- PROJECT_BIBLE.md
- AI_CONTEXT.md

---

# AI Guidelines

Before implementing a feature:

1. Check PROJECT_BIBLE.md.
2. Preserve the existing architecture.
3. Do not move files unless necessary.
4. Do not introduce new libraries without approval.
5. Follow the existing folder structure.
6. Keep components focused and reusable.
7. Favor maintainability over clever solutions.

---

# Current Goal

Implement drag & drop support while preserving the existing file management workflow.

After that:

- Password validation
- Rust commands
- AES-256 encryption
- AES-256 decryption