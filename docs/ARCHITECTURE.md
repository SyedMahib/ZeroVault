# ZeroVault Architecture

**Version:** 0.0.1

---

# Overview

ZeroVault is an offline-first desktop application built using a layered architecture.

The application separates the user interface from the core encryption logic.

This separation improves maintainability, testing, security, and future scalability.

---

# Technology Stack

Frontend

- React
- TypeScript
- Vite

Desktop Layer

- Tauri

Backend

- Rust

Version Control

- Git
- GitHub

---

# High-Level Architecture

+-----------------------------+
|        React UI             |
+-----------------------------+
              |
              |
      Tauri Commands
              |
              |
+-----------------------------+
|       Rust Backend          |
+-----------------------------+
      |        |         |
      |        |         |
   Crypto   Filesystem  Security
      |        |         |
      +--------+---------+
               |
      Local Storage Only

---

# Responsibilities

## React

Responsible for:

- User Interface
- Forms
- Progress indicators
- Drag & Drop
- User interaction

React never performs encryption directly.

---

## Tauri

Responsible for:

- Communication between React and Rust
- Native desktop functionality

---

## Rust

Responsible for:

- Encryption
- Decryption
- Password processing
- Secure random generation
- File system operations

---

# Planned Folder Structure

src/

- app/
- components/
- pages/
- hooks/
- services/
- types/
- utils/

src-tauri/src/

- commands/
- crypto/
- filesystem/
- security/
- models/
- utils/

---

# Security Model

The frontend never directly manipulates encryption keys.

Sensitive operations remain inside the Rust backend.

Passwords are processed only when required and are never stored.

---

# Future Expansion

Future versions may include:

- Secure password manager
- File integrity verification
- Secure file sharing
- Hardware security key support
- Plugin architecture

---

End of Architecture Document.