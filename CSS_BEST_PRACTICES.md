# 💻 Modern CSS Patterns Used in Redesign

## Overview
This document explains the modern CSS patterns and best practices used throughout the JobAlert India redesign.

---

## 1. CSS Variables (Custom Properties)

### What They Are
CSS variables allow you to store values that can be reused throughout your stylesheets.

### Implementation
```css
:root {
  --primary-blue: #0066cc;
  --space-md: 16px;
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.button {
  background: var(--primary-blue);
  padding: var(--space-md);
  box-shadow: var(--shadow-lg);
}
```

### Benefits
- ✅ Single source of truth for colors
- ✅ Easy theme switching
- ✅ Better maintainability
- ✅ Consistent design system

---

## 2. Flexbox Layouts

### What It Is
Flexbox is a one-dimensional layout method for arranging items in rows or columns.

### Common Patterns Used

#### Center Content
```css
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

#### Space Between
```css
.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

#### Column Layout
```css
.flex-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
```

### When to Use
- Navigation bars
- Card layouts
- Simple linear layouts
- Quick alignment fixes

---

## 3. CSS Grid Layouts

### What It Is
CSS Grid is a two-dimensional layout system for complex layouts.

### Implementation
```css
.job-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-lg);
}
```

### Key Features
- `repeat()`: Create repeating columns
- `auto-fill`: Fill available space
- `minmax()`: Define minimum and maximum sizes
- `gap`: Spacing between items

### When to Use
- Job card grids
- Multi-column layouts
- Complex page layouts
- Responsive card layouts

---

## 4. Responsive Design Patterns

### Mobile-First Approach
Start with mobile styles, then enhance for larger screens:

```css
/* Mobile (base styles) */
.card {
  grid-template-columns: 1fr;
  padding: var(--space-md);
  font-size: 14px;
}

/* Tablet (medium screens) */
@media (min-width: 768px) {
  .card {
    grid-template-columns: repeat(2, 1fr);
    padding: var(--space-lg);
    font-size: 16px;
  }
}

/* Desktop (large screens) */
@media (min-width: 1024px) {
  .card {
    grid-template-columns: repeat(4, 1fr);
    padding: var(--space-xl);
    font-size: 18px;
  }
}
```

### Breakpoints Used
```css
/* Small phones (< 480px) */
@media (max-width: 480px) { }

/* Phones & tablets (< 768px) */
@media (max-width: 768px) { }

/* Tablets & small laptops (< 1024px) */
@media (max-width: 1024px) { }

/* Large screens (> 1024px) */
/* Default styles */
```

---

## 5. Shadow and Elevation

### Depth Levels
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);      /* Subtle */
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);     /* Medium */
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);     /* Large */
```

### Implementation
```css
.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Best Practices
- Use subtle shadows for resting state
- Increase shadow on hover/interaction
- Combine with transform for better effect

---

## 6. Smooth Transitions

### Transition Durations
```css
--transition-fast: 0.2s ease;      /* Quick interactions */
--transition-normal: 0.3s ease;    /* Standard animations */
--transition-slow: 0.5s ease;      /* Slower animations */
```

### Implementation
```css
.link {
  color: var(--primary-blue);
  transition: color var(--transition-normal);
}

.link:hover {
  color: var(--accent-orange);
}
```

### Properties to Animate
- ✅ `color` - Color changes
- ✅ `background` - Background color changes
- ✅ `transform` - Scale, rotate, translate
- ✅ `opacity` - Fade effects
- ❌ `width` - Avoid, causes reflow
- ❌ `height` - Avoid, causes reflow

---

## 7. Transform Effects

### Common Transforms
```css
/* Lift effect on hover */
.card:hover {
  transform: translateY(-2px);
}

/* Scale effect */
.button:hover {
  transform: scale(1.05);
}

/* Rotate effect */
.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### Performance Tips
- Transform is performant (uses GPU)
- Avoid animating width/height
- Combine multiple transforms: `transform: scale(1.05) translateY(-2px);`

---

## 8. Gradient Backgrounds

### Linear Gradients
```css
/* Horizontal gradient */
background: linear-gradient(135deg, #0066cc 0%, #004599 100%);

/* Angle syntax */
/* 0deg = top to bottom */
/* 90deg = left to right */
/* 135deg = top-left to bottom-right */
```

### Implementation
```css
/* Header gradient */
.header {
  background: linear-gradient(135deg, #0066cc 0%, #004599 100%);
}

/* Subtle background gradient */
.section {
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.02) 0%, rgba(0, 102, 204, 0.01) 100%);
}
```

### Use Cases
- Headers and navigation
- Subtle section backgrounds
- Button backgrounds
- Hover states

---

## 9. Responsive Typography

### Font Size Scaling
```css
:root {
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  --font-size-2xl: 32px;
  --font-size-3xl: 40px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 { font-size: var(--font-size-2xl); }  /* From 40px to 32px */
  h2 { font-size: var(--font-size-lg); }   /* From 32px to 24px */
}
```

### Line Height
```css
/* Better readability */
body {
  line-height: 1.6;  /* 60% more than font size */
}

h1, h2, h3 {
  line-height: 1.2;  /* Tighter for headings */
}
```

---

## 10. Card Component Pattern

### Basic Card
```css
.card {
  background: var(--white);
  border: 1px solid var(--border-gray);
  border-radius: 10px;
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-8px);
  border-color: var(--primary-blue);
}
```

### Card with Accent
```css
.card {
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--primary-blue);
}
```

---

## 11. Button Styles

### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-dark));
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: 0 2px 8px rgba(0, 102, 204, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 102, 204, 0.3);
}
```

### Secondary Button
```css
.btn-secondary {
  background: var(--light-gray);
  color: var(--dark-gray);
  border: 1px solid var(--border-gray);
  /* ... other properties ... */
}
```

---

## 12. Focus States and Accessibility

### Focus Ring
```css
.input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px var(--primary-light);
}
```

### Visible Focus
```css
.button:focus-visible {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}
```

### High Contrast Mode
```css
@media (prefers-contrast: more) {
  .card {
    border-width: 2px;
  }
}
```

---

## 13. Animation Keyframes

### Bounce Animation
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.icon {
  animation: bounce 2s infinite;
}
```

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: fadeIn 0.3s ease;
}
```

---

## 14. Container Queries (Modern)

### Pattern (Future Support)
```css
@container (min-width: 768px) {
  .card {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Benefits
- Component-based responsive
- Better encapsulation
- No need for global breakpoints

---

## 15. CSS Grid Template Areas

### Complex Layouts
```css
.grid {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

---

## 16. Utility-First Approach

### Reusable Classes
```css
.flex { display: flex; }
.flex-center { display: flex; align-items: center; justify-content: center; }
.gap-md { gap: var(--space-md); }
.p-lg { padding: var(--space-lg); }
.text-center { text-align: center; }
```

### Usage
```html
<div class="flex gap-md p-lg">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
</div>
```

---

## 17. Performance Tips

### Optimization Techniques
1. **Use transform for animations**: GPU accelerated
2. **Avoid layout thrashing**: Don't alternate read/write
3. **Use will-change sparingly**: Only for animated elements
4. **Minimize selectors**: Keep specificity low
5. **Use shorthand**: `margin: 10px 20px;` vs individual properties

### Example
```css
/* Good */
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Avoid */
.card:hover {
  margin-top: -2px;  /* Causes reflow */
  height: auto;       /* Causes reflow */
}
```

---

## 18. Naming Conventions

### BEM (Block Element Modifier)
```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }

/* Modifier */
.card--featured { }
.card--minimal { }
```

### Or Simpler Naming
```css
.job-card { }
.job-card-header { }
.job-card-body { }
.job-card-hover { }
```

---

## Summary Table

| Pattern | Use Case | Performance | Complexity |
|---------|----------|-------------|-----------|
| Flexbox | Navigation, simple layouts | Excellent | Low |
| Grid | Card grids, complex layouts | Excellent | Medium |
| Gradient | Backgrounds, visual effects | Excellent | Low |
| Transform | Animations, hover effects | Excellent | Low |
| Transition | Smooth interactions | Excellent | Low |
| Shadow | Depth, elevation | Good | Low |
| Animation | Loading states, effects | Good | Medium |

---

## Best Practices Summary

1. ✅ Use CSS variables for consistency
2. ✅ Mobile-first responsive design
3. ✅ Use transform and opacity for animations
4. ✅ Avoid layout-thrashing operations
5. ✅ Semantic HTML with CSS classes
6. ✅ Clear naming conventions
7. ✅ Focus on accessibility
8. ✅ Test on real devices
9. ✅ Optimize for performance
10. ✅ Document complex styles

---

**Reference**: January 2026  
**CSS Version**: CSS3 (with Grid & Variables support)
