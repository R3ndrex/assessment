# Front-end JS engineer test assessment - the React component library

## Project Setup

Go to app folder

```bash
  cd my-vite-app
```

Install all project dependencies

```bash
  npm install
```

Start the React development server

```bash
  npm run dev
```

Start Storybook in development mode

```bash
  npm run storybook
```

## Components

### Input

Text input with an optional clear button. It supports two types, password and text, and keeps the entered value in state. When clearable is enabled, a small “X” button appears inside the input, letting the user instantly clear the text. The layout uses absolute positioning so the clear button sits on the right inside the input field

Password Clearable
![Password Clearable](./images/password-clearable.png)

Password Not Clearable
![Password Not Clearable](./images/password-no-clearable.png)
Text Clearable
![Text Clearable](./images/text-clearable.png)
Text Not Clearable
![Password Not Clearable](./images/text-no-clearable.png)

### Toast

Displays a message of type info, success, error, or warning. It automatically appears with a smooth fade-in animation and disappears after a set duration, which can be customized or defaults based on the type. Each toast shows a capitalized heading with the type and the message text. Users can also manually close it by clicking the small “X” button

Info
![Toast Info](./images/toast-info.png)
Success
![Toast Success](./images/toast-success.png)
Warning
![Toast Warning](./images/toast-warning.png)
Error
![Toast Error](./images/toast-error.png)

### Sidebar Menu

This is a slide in Sidebar menu with nested, expandable items. It can be toggled with a button and closes when clicking outside, with arrows indicating submenus

Open no text
![Open menu no Text](./images/open-no-text.png)

Open 1 nested item
![Open 1 nested item](./images/onenested.png)

Open 2 nested item
![Toast Error](./images/twonested.png)

Open no text
![Closed menu](./images/closed.png)
