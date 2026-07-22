# ZeroVault API Documentation

> This document defines the contract between the React frontend and the Rust backend.
>
> Every Tauri command must be documented here before or immediately after implementation.
>
> The goal is to keep the frontend and backend synchronized throughout development.

---

# Overview

## Frontend

- React
- TypeScript
- Tauri JavaScript API

Responsible for:

- User Interface
- User Interaction
- Validation
- Progress Display
- Calling Rust Commands

---

## Backend

- Rust
- Tauri Commands

Responsible for:

- Encryption
- Decryption
- File Operations
- Secure Delete
- Cryptography
- Progress Reporting

---

# Communication Flow

```
React UI
    │
    ▼
Tauri invoke()
    │
    ▼
Rust Command
    │
    ▼
Filesystem / Crypto
    │
    ▼
Result
    │
    ▼
React UI
```

---

# Current Commands

At the moment there are no production Rust commands.

The template `greet()` command has been removed and should never be used.

---

# Command Documentation Template

Every command should follow this format.

---

## Command

Name

```
command_name
```

Purpose

Short explanation.

---

### Frontend

```ts
await invoke("command_name", {
    argument1,
    argument2
});
```

---

### Rust

```rust
#[tauri::command]
fn command_name(...) -> Result<..., String> {

}
```

---

### Parameters

| Name | Type | Description |
|------|------|-------------|
| argument1 | string | Description |

---

### Returns

Success

```json
{
    "success": true
}
```

Failure

```json
{
    "success": false,
    "message": "Reason"
}
```

---

### Possible Errors

- Invalid password
- File not found
- Permission denied

---

# Planned Commands

---

## encrypt_files

Status

Planned

Purpose

Encrypt one or more files using AES-256.

Frontend

```ts
invoke("encrypt_files", {
    paths,
    password
});
```

Parameters

| Name | Type |
|------|------|
| paths | string[] |
| password | string |

Returns

```ts
{
    success: boolean;
    encryptedFiles: string[];
}
```

---

## decrypt_files

Status

Planned

Purpose

Decrypt encrypted files.

Parameters

| Name | Type |
|------|------|
| paths | string[] |
| password | string |

Returns

```ts
{
    success: boolean;
    decryptedFiles: string[];
}
```

---

## validate_password

Status

Planned

Purpose

Validate password before encryption.

Returns

```ts
{
    valid: boolean;
    score: number;
    message: string;
}
```

---

## generate_password

Status

Planned

Purpose

Generate a secure random password.

Returns

```ts
{
    password: string;
}
```

---

## open_output_folder

Status

Planned

Purpose

Open the directory containing the encrypted or decrypted files.

Returns

```ts
{
    success: true
}
```

---

## get_app_info

Status

Future

Purpose

Return application information.

Returns

```ts
{
    version: string;
    platform: string;
    tauriVersion: string;
}
```

---

# Error Handling Standard

Every Rust command should return:

```rust
Result<T, String>
```

Never panic.

Never unwrap user input.

Always return meaningful error messages.

---

# Frontend Rules

Always call commands using:

```ts
import { invoke } from "@tauri-apps/api/core";
```

Never access Rust functions directly.

Always wrap calls in:

```ts
try {

}
catch {

}
```

Always display user-friendly error messages.

---

# Backend Rules

Every command must:

- Validate inputs
- Return Result
- Never panic
- Log useful debug information
- Be platform independent

---

# Security Rules

Passwords must never:

- Be logged
- Be stored
- Be cached
- Be written to disk

Encryption keys must exist only in memory.

Sensitive memory should be cleared whenever possible.

The frontend must never perform cryptographic operations.

Rust is the only trusted cryptographic layer.

---

# Response Standards

Success

```json
{
    "success": true
}
```

Failure

```json
{
    "success": false,
    "message": "Human readable explanation"
}
```

Avoid returning raw Rust errors to the UI.

---

# Future Events

Planned Tauri Events

- encryption-started
- encryption-progress
- encryption-completed
- decryption-started
- decryption-progress
- decryption-completed
- operation-cancelled

These events will be emitted by Rust and consumed by React for real-time progress updates.

---

# API Version

Current

```
v0.1
```

---

# Last Updated

Sprint 5 Complete

Version

v0.2.0