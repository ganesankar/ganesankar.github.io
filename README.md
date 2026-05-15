# Ganesan Karuppaiya — Profile

A single-page profile that lists my social/web links. The page detects your
operating system once at boot and serves up an OS-appropriate "design time
machine":

| OS detected | Look | Slider |
|-------------|------|--------|
| **macOS / iOS / iPadOS** | macOS 26 Tahoe (Liquid Glass) by default; slider walks through Cheetah → Tiger → Leopard → Snow Leopard → Yosemite → Big Sur → Sonoma → Tahoe (2001–2025) | Yes |
| **Windows** | Windows 11 Mica by default; slider walks through 95 → 98 → XP → Vista → 7 → 8 → 10 → 11 (1995–2021) | Yes |
| **Android** | Android 15 Material You by default; slider walks through Cupcake → Gingerbread → Ice Cream Sandwich → KitKat → Lollipop → Nougat → 10 → 15 (2009–2024) | Yes |
| **Linux / ChromeOS / anything else** | Single Ubuntu (Yaru-inspired aubergine + orange) | No |

Drag the slider or tap any year tick to jump straight to an era. Touch on the
icons (long-press on mobile) reveals the platform name.

There is intentionally **no UI** to switch between OS designs — you get the
one matching the device you're on. For testing/sharing, the URL accepts
`?os=mac`, `?os=windows`, `?os=android`, or `?os=linux` as an override.

## Stack

- Pure static: HTML + CSS, no build step.
- [Alpine.js](https://alpinejs.dev/) (CDN) for the small bit of reactive state (OS detection, era index, derived current era name).
- [Tippy.js](https://atomiks.github.io/tippyjs/) + [Popper](https://popper.js.org/) (CDN) for hover tooltips on the social icons (long-press shows them on touch devices).
- All theming is driven by CSS custom properties on `<body data-os="…" data-era="0..7">`.
- Icons via [Line Awesome](https://icons8.com/line-awesome) (CDN).
- Mobile-first CSS. Deploys directly to GitHub Pages.

## Run locally

Any static server works. Easiest options:

```bash
# Option 1: Python (built-in on macOS/Linux, also works on Windows)
python -m http.server 8000

# Option 2: Node
npx serve .
```

Open http://localhost:8000.

## Deploy on GitHub Pages

1. Push to GitHub.
2. Repo **Settings → Pages → Build and deployment**: pick **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Done. Your site is at `https://<user>.github.io/<repo>/`.

## Files

- `index.html` — markup + slider script
- `profile.css` — all era themes and layout
- `README.md` — this file
