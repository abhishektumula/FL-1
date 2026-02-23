# Theme Management in FL-1

The project does not use a `ThemeProvider` (like `next-themes`). Instead, it implements a custom, lightweight theme-switching mechanism using React state, browser APIs, and CSS variables.

## 1. Theme State & Logic (`app/Components/navbar/NavBar.tsx`)
The `NavBar` component is responsible for managing the theme state.

- **Initial State**: It determines the initial theme by checking:
    1. `localStorage.getItem("theme")` for a saved preference.
    2. `window.matchMedia("(prefers-color-scheme: dark)")` for system preference if no saved preference exists.
- **Persistence & DOM Update**: An `useEffect` hook runs whenever the `theme` state changes:
    ```tsx
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);
    ```
    This sets a `data-theme` attribute on the `<html>` element and persists the choice in `localStorage`.

## 2. Global Styles & Variables (`app/globals.css`)
The actual visual changes are handled via CSS variables.

- **Light Mode (Default)**: Variables are defined under `:root`.
- **Dark Mode**: Variables are overridden when `[data-theme="dark"]` is present on the `html` tag.

```css
:root {
  --background: #f3efe8;
  --foreground: #1f1c18;
  /* ... other variables */
}

[data-theme="dark"] {
  --background: #171411;
  --foreground: #f4ece1;
  /* ... other variables */
}
```

## 3. Usage in Components
The project uses **Tailwind CSS v4**, which has deep integration with CSS variables. Components use these variables instead of hardcoded hex values to remain theme-aware.

### How it's applied:
1.  **Direct CSS Variables**: Using `text-[var(--muted)]` or `bg-[var(--background)]`.
2.  **Tailwind v4 Variable Mapping**: In `app/globals.css`, some variables are mapped within the `@theme` block:
    ```css
    @theme inline {
      --color-background: var(--background);
      --color-foreground: var(--foreground);
    }
    ```
    This allows using standard Tailwind classes like `text-foreground` or `bg-background`, which will automatically point to the underlying CSS variables.
3.  **Arbitrary Variable Syntax**: Using `text-(--muted)`, a shorthand in Tailwind v4 for `text-[var(--muted)]`.

### Example: Making a component theme-aware
Instead of:
```tsx
<div style={{ backgroundColor: '#f3efe8' }}>...</div>
```
Use:
```tsx
<div className="bg-background">...</div> 
/* or */
<div className="bg-[var(--background)]">...</div>
```

## 4. Why don't components need access to React State?
A common question is: "If the theme state is only in `NavBar.tsx`, how do other components know when it changes?"

The answer is **Decoupled Synchronization**:
- **`NavBar.tsx`** is the "Source of Truth" for the user's intent. It handles the toggle and updates the `data-theme` attribute on the root `<html>` element.
- **Other Components** don't need to know the React state value (`light` or `dark`). They only care about the **CSS Variables** defined in `app/globals.css`.
- **Browser's Native CSS Engine** handles the update. When `NavBar` changes `<html data-theme="dark">`, the browser immediately re-evaluates all CSS variables. Any component using a variable like `var(--background)` or a Tailwind class like `bg-background` is automatically repainted by the browser with the new dark-mode value.

This approach is highly performant as it avoids "prop drilling" or unnecessary React re-renders for every component when the theme changes.
