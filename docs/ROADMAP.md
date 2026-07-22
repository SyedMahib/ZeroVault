# ZeroVault Development Roadmap

> This roadmap outlines the planned development phases of ZeroVault from the current state to the first stable release.
>
> Each sprint builds upon the previous one and should conclude with:
>
> - Code Review
> - Documentation Update
> - Git Commit
> - Architecture Review

---

# Current Version

**v0.2.0**

---

# Sprint 5 ✅ COMPLETE

## Native File Management

Completed

- Native Tauri File Picker
- Native Tauri Drag & Drop
- Drag Overlay
- Drop Animations
- Multi-file Selection
- Additive File Selection
- Duplicate Prevention
- Remove Individual Files
- Clear All Files
- Shared FileContext
- Automatic UI Updates

---

# Sprint 6 🔄 CURRENT

## Password System

Goal

Build a secure password workflow before encryption begins.

Tasks

- Password Validation
- Show / Hide Password
- Password Strength Meter
- Password Requirements
- Disable Encrypt button when password is invalid
- Reusable Password Hook

---

# Sprint 7

## Rust Integration

Goal

Connect the React frontend with the Rust backend.

Tasks

- Tauri Commands
- invoke() Integration
- Error Handling
- API Contract Implementation
- Rust Project Structure

---

# Sprint 8

## AES-256 Encryption

Goal

Implement secure file encryption.

Tasks

- AES-256 Encryption
- File Output
- Password-Based Key Derivation
- Encryption Metadata
- Error Recovery

---

# Sprint 9

## AES-256 Decryption

Goal

Implement secure file decryption.

Tasks

- Password Verification
- File Decryption
- Metadata Validation
- Output Management
- Error Handling

---

# Sprint 10

## Progress System

Goal

Provide real-time feedback during long-running operations.

Tasks

- Progress Bar
- Progress Percentage
- Estimated Time Remaining
- Cancel Operation
- Success & Error Notifications

---

# Sprint 11

## Application Features

Goal

Complete the core desktop experience.

Tasks

- Settings
- About Dialog
- Preferences
- Keyboard Shortcuts
- Remember Last Output Folder

---

# Sprint 12

## Security & File Management

Goal

Add advanced security features.

Tasks

- Secure Delete
- Folder Encryption
- Folder Decryption
- Batch Processing
- Recent Files
- Logging

---

# Sprint 13

## Performance & Polish

Goal

Improve performance and user experience.

Tasks

- Performance Optimization
- Memory Optimization
- Accessibility Improvements
- UI Polish
- Cross-platform Testing

---

# Sprint 14

## Release Candidate

Goal

Prepare the first production-ready version.

Tasks

- Bug Fixes
- Documentation Review
- Code Cleanup
- Packaging
- Final Testing

---

# Version 1.0

## Stable Release

Deliverables

- Complete AES-256 Encryption Workflow
- Complete AES-256 Decryption Workflow
- Native File Picker
- Native Drag & Drop
- Password Validation
- Secure Delete
- Folder Encryption
- Progress Tracking
- Cross-platform Support
- Full Documentation
- Production Testing

---

# Future Releases

## Version 1.1

- Automatic Updates
- Theme Support
- File History
- Better Logging
- Performance Improvements

---

## Version 1.2

- Multi-language Support
- Plugin Architecture
- Batch Folder Processing
- Advanced Settings

---

# Long-Term Vision

ZeroVault aims to become a lightweight, privacy-first, cross-platform desktop encryption application with:

- Native desktop experience
- Offline-first design
- Modern UI
- High performance
- Strong security
- Clean architecture
- Comprehensive documentation

---

Last Updated

**Sprint 5 Complete**

Version

**v0.2.0**