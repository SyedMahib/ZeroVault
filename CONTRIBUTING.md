# Contributing to ZeroVault

**Project Status: ZeroVault is currently maintained by a single primary developer. External contributions are welcome, but major architectural changes should be discussed before implementation.**

First of all, thank you for your interest in contributing to ZeroVault!

ZeroVault is a privacy-first, cross-platform desktop application built with **React**, **TypeScript**, **Tauri v2**, and **Rust**. Our goal is to build a secure, maintainable, and well-documented encryption application.

Please read this guide before submitting code.

---

# Development Philosophy

Before writing code:

- Read the documentation.
- Understand the current architecture.
- Follow existing conventions.
- Prefer maintainability over cleverness.
- Keep changes focused and small.

---

# Required Reading

Before contributing, please read:

```
README.md
docs/PROJECT_BIBLE.md
docs/AI_CONTEXT.md
docs/ARCHITECTURE.md
docs/API.md
docs/SECURITY.md
```

These documents define how the project should be developed.

---

# Development Workflow

1. Fork the repository.
2. Clone your fork.
3. Create a new branch.
4. Implement your feature or fix.
5. Test your changes.
6. Update documentation if needed.
7. Commit using Conventional Commits.
8. Push your branch.
9. Open a Pull Request.

---

# Branch Naming

Use descriptive branch names.

Examples

```
feature/password-validation

feature/aes-encryption

feature/settings

fix/file-picker

fix/password-input

docs/project-bible

refactor/file-context
```

Avoid

```
new

test

branch1

my-work
```

---

# Commit Convention

ZeroVault follows Conventional Commits.

Examples

```
feat:
fix:
docs:
style:
refactor:
test:
perf:
build:
ci:
chore:
```

Examples

```
feat: implement native drag and drop

fix: prevent duplicate file selection

docs: update architecture documentation

refactor: simplify FileContext

test: add password validation tests
```

---

# Coding Standards

## TypeScript

- Strict Mode
- Avoid any
- Prefer explicit types

---

## React

- Functional Components only
- Prefer Hooks
- Keep components small
- Business logic belongs in hooks

---

## Styling

- Global CSS
- CSS Variables
- Component-specific styles
- No inline styles unless absolutely necessary

---

## Architecture

Follow the Feature-First Architecture.

Business logic belongs inside features.

Pages should remain thin.

---

## Imports

Always use path aliases.

Correct

```ts
import { useFiles } from "@/context/FileContext";
```

Avoid

```ts
../../../context/FileContext
```

---

# Documentation Policy

If your change affects architecture, behavior, or public APIs, update the appropriate documentation.

Possible files include:

- CHANGELOG.md
- PROJECT_BIBLE.md
- AI_CONTEXT.md
- ARCHITECTURE.md
- API.md
- DECISIONS.md
- PROJECT_STATUS.md
- ROADMAP.md
- SECURITY.md

Documentation is considered part of the feature.

---

# Pull Request Guidelines

Before opening a Pull Request, verify:

- Code builds successfully
- No TypeScript errors
- No ESLint errors
- No unused code
- Documentation updated (if required)
- UI tested
- Feature behaves as expected

---

# Project Principles

We value:

- Security
- Simplicity
- Maintainability
- Performance
- Clear documentation
- Consistent architecture

When in doubt, choose the simpler and more maintainable solution.

---

# Reporting Bugs

Include:

- Operating System
- ZeroVault version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots or logs (if applicable)

---

# Feature Requests

When proposing a feature, explain:

- The problem it solves
- The proposed solution
- Alternative approaches
- Potential impact on the architecture

---

# Questions

If you're unsure about an architectural decision, please discuss it before implementing significant changes.

---

# Thank You

Thank you for helping improve ZeroVault!

Every contribution—whether it's code, documentation, testing, or design—is appreciated.