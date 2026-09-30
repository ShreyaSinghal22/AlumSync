import colors from 'tailwindcss/colors'

/* Tailwind v3 can't apply opacity modifiers (bg-primary/10, ring-primary/10 ...)
   to plain var(--x) colours, so those classes silently generate nothing.
   This helper keeps the plain var(--x) for normal use and switches to
   color-mix() when a /NN modifier is present. */
const withAlpha = (name) => ({ opacityValue }) => {
  if (opacityValue === undefined || String(opacityValue).startsWith('var(')) {
    return `var(${name})`
  }
  const pct = +(Number(opacityValue) * 100).toFixed(2)
  return `color-mix(in oklab, var(${name}) ${pct}%, transparent)`
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: withAlpha('--background'),
        foreground: withAlpha('--foreground'),
        surface: withAlpha('--surface'),
        'surface-2': withAlpha('--surface-2'),
        'surface-3': withAlpha('--surface-3'),
        card: withAlpha('--card'),
        'card-foreground': withAlpha('--card-foreground'),
        popover: withAlpha('--popover'),
        'popover-foreground': withAlpha('--popover-foreground'),
        primary: withAlpha('--primary'),
        'primary-foreground': withAlpha('--primary-foreground'),
        'primary-soft': withAlpha('--primary-soft'),
        secondary: withAlpha('--secondary'),
        'secondary-foreground': withAlpha('--secondary-foreground'),
        muted: withAlpha('--muted'),
        'muted-foreground': withAlpha('--muted-foreground'),
        accent: withAlpha('--accent'),
        'accent-foreground': withAlpha('--accent-foreground'),
        violet: { ...colors.violet, DEFAULT: withAlpha('--violet') },
        cyan: { ...colors.cyan, DEFAULT: withAlpha('--cyan') },
        success: withAlpha('--success'),
        warning: withAlpha('--warning'),
        destructive: withAlpha('--destructive'),
        'destructive-foreground': withAlpha('--destructive-foreground'),
        border: withAlpha('--border'),
        'border-strong': withAlpha('--border-strong'),
        input: withAlpha('--input'),
        ring: withAlpha('--ring'),

        /* aliases — your existing classes keep working unchanged */
        'bg-main': withAlpha('--bg-main'),
        'card-bg': withAlpha('--card-bg'),
        'primary-violet': withAlpha('--primary-violet'),
        'accent-violet': withAlpha('--accent-violet'),
        'text-main': withAlpha('--text-main'),
        'text-muted': withAlpha('--text-muted'),
        'border-subtle': withAlpha('--border-subtle'),
        'input-bg': withAlpha('--input-bg'),
        'input-border': withAlpha('--input-border'),
        'hover-bg': withAlpha('--hover-bg'),
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sora: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // alias so font-sora keeps working, now renders Inter per spec
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: withAlpha('--radius'),
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': 'calc(var(--radius) + 12px)',
        'as-card': '32px',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        'card-deep': 'var(--shadow-card)',
      },
    }
  },
  plugins: [],
}