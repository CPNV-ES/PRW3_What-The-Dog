# Modules

This folder contains all components, contexts, hooks and others needed for a specific module. This allows for a better separation of each modules.

The goal of this structure is to remove the dependencies between each modules, thus allowing a better evolutivity of the application.

## Creating a new module

1. Create a new folder under src/modules
2. Add the components, contexts, hooks and others needed for your module

### Example

```
/modules
├ /clients
| ├ CreateClientForm.tsx
│ ├ ClientCard.tsx
│ └ useClient.ts
└ /dogs
  └ ...
```
