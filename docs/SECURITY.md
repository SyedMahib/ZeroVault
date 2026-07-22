# ZeroVault Security Specification

> This document defines the security architecture of ZeroVault.
>
> All cryptographic implementations must follow this specification.
>
> Never change security decisions without updating this document and creating a new Architecture Decision Record (ADR).

---

# Purpose

ZeroVault is designed to provide secure, offline file encryption.

Security is the highest priority.

Performance, convenience, and UI should never compromise security.

---

# Security Principles

ZeroVault follows these principles:

- Offline First
- Privacy by Design
- No Telemetry
- No User Tracking
- No Cloud Storage
- No Password Storage
- No Plaintext Recovery
- Fail Secure
- Secure Defaults

---

# Threat Model

ZeroVault protects against:

✅ Unauthorized access to encrypted files

✅ Offline theft of encrypted files

✅ Weak password attacks through strong key derivation

✅ File tampering detection

ZeroVault does NOT protect against:

❌ Malware already running on the computer

❌ Keyloggers

❌ Physical attacks while files are already decrypted

❌ Compromised operating systems

---

# Encryption Algorithm

Status

Planned

Algorithm

AES-256-GCM

Reason

- Industry Standard
- Authenticated Encryption
- High Performance
- Widely Audited

Alternative considered

- XChaCha20-Poly1305

Current Decision

AES-256-GCM

---

# Key Derivation

Status

Planned

Algorithm

Argon2id

Reason

Passwords must never be used directly as encryption keys.

Argon2id provides resistance against:

- GPU attacks
- ASIC attacks
- Rainbow tables

Future Parameters

Memory Cost

64 MB

Iterations

3

Parallelism

4

Key Length

32 bytes

---

# Random Number Generation

Every nonce, salt, and random value must use a cryptographically secure random number generator provided by Rust.

Never use pseudo-random generators.

---

# Password Handling

Passwords must never:

- Be written to disk
- Be logged
- Be stored in configuration
- Be cached
- Be transmitted over the network

Passwords should exist only in memory.

---

# Memory Safety

Sensitive memory should be cleared whenever practical.

Examples

- Passwords
- Derived keys
- Temporary plaintext buffers

Rust crates that support zeroization should be preferred.

---

# File Format

Planned Structure

```
+----------------------------+
| ZeroVault Header           |
+----------------------------+
| Version                    |
+----------------------------+
| Salt                       |
+----------------------------+
| Nonce                      |
+----------------------------+
| Metadata                   |
+----------------------------+
| Ciphertext                 |
+----------------------------+
| Authentication Tag         |
+----------------------------+
```

---

# File Extension

Proposed

```
.zv
```

Example

```
photo.jpg

↓

photo.jpg.zv
```

---

# Authentication

AES-GCM provides built-in authentication.

If a file has been modified:

Decryption must fail.

Never output corrupted plaintext.

---

# Secure Delete

Status

Planned

Purpose

Reduce the likelihood of recovering deleted plaintext files.

Implementation may vary by operating system.

Note

True secure deletion cannot be guaranteed on SSDs due to wear leveling.

Documentation should clearly communicate this limitation.

---

# Temporary Files

ZeroVault should avoid creating temporary plaintext files whenever possible.

If temporary files are unavoidable:

- Create securely
- Delete immediately
- Never reuse filenames

---

# Logging Policy

Allowed

- Application events
- Errors
- Performance metrics

Never log

- Passwords
- Keys
- Plaintext
- File contents
- Sensitive metadata

---

# Error Messages

Good

```
Incorrect password.
```

Bad

```
Authentication tag mismatch after AES-GCM verification.
```

Never expose internal cryptographic details.

---

# Frontend Security

React must never:

- Encrypt files
- Decrypt files
- Generate keys
- Store passwords permanently

React responsibilities:

- UI
- Validation
- Progress Display

---

# Backend Security

Rust owns:

- Encryption
- Decryption
- Key Derivation
- Random Number Generation
- File IO
- Authentication
- Secure Delete

---

# Dependencies

Only well-maintained cryptographic libraries may be used.

Preferred crates

- aes-gcm
- argon2
- rand
- zeroize

Avoid obscure or unmaintained cryptographic crates.

---

# Future Security Features

- Folder Encryption
- Secure Password Generator
- Clipboard Auto-Clear
- Memory Locking (where supported)
- Hardware-backed Key Storage (future)
- Digital Signature Verification

---

# Security Review Checklist

Before every release verify:

- [ ] No passwords are logged
- [ ] No encryption keys are stored
- [ ] Secure random generation is used
- [ ] Authentication failures stop decryption
- [ ] Memory cleanup is implemented
- [ ] Dependencies are up to date
- [ ] Documentation matches implementation

---

# Security Philosophy

ZeroVault prioritizes:

1. Security
2. Privacy
3. Reliability
4. Performance
5. Convenience

Whenever these conflict, security takes precedence.

---

# Last Updated

Pre-Encryption Phase

Version

v0.1