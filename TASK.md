# Task: Add Leadership Arch Framework Service Card

## Context
Project: marley-lunt-lean-coaching  
Branch: antigravity/add-leadership-arch-service  
Assigned by: Hermes Agent (orchestrator)

## Goal
Add a new service card for **"Leadership Arch Framework"** to the Services section in `app/page.tsx`. This should match the existing 5 service cards that are already there.

## Requirements

### 1. Service Data
Add this entry to the `services` array (6th item, or reposition existing cards as you see fit):
- **Title:** "Leadership Arch Framework"
- **Description:** "A structured coaching approach built around four pillars — Awareness, Responsibility, Decision clarity, Actionability — helping leaders build repeatable decision-making habits."

### 2. Icon Placeholder
Each service card should have a visible icon placeholder. Check if the existing cards already use icons (e.g., Heroicons or Lucide). If so, add an appropriate icon for this new service (suggest: a compass, framework symbol, or arch/arc shape using the same icon library).

### 3. Design Match
- Same card styling as existing services (`rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition hover:border-gray-700 hover:bg-gray-900/80`)
- Same typography: `text-lg font-semibold text-gray-100` for title, `text-sm leading-6 text-gray-400` for description
- Maintain the 2-column grid layout — consider adjusting to a 3-column or flex wrap if 6 cards need it

### 4. Grid Layout
With 6 service cards, update the grid from `sm:grid-cols-2` to `sm:grid-cols-2 md:grid-cols-3` so the row has an even layout and doesn't look uneven with an odd number of items.

## Files to Modify
- `app/page.tsx` — add service entry + optional icon, adjust grid columns

## After Completing
Commit message: "Add Leadership Arch Framework service card"  
Push to origin on branch: antigravity/add-leadership-arch-service
