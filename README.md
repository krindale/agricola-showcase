# Agricola Showcase

보드게임 아그리콜라(Agricola)를 소개하는 웹페이지입니다.

**Live Demo**: https://krindale.github.io/agricola-showcase-/

![Agricola](https://img.shields.io/badge/Agricola-Board%20Game-8B4513)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4)

## About

17세기 유럽, 농부가 되어 최고의 농장을 만드는 전략 보드게임 아그리콜라를 소개합니다.

### Features

- 게임 소개 및 배경 스토리
- 14라운드 / 6단계 게임 흐름 시각화
- 핵심 액션 인터랙티브 가이드
- 수확 시스템 및 점수 계산 안내
- 한국어 / English 언어 전환

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build**: Vite 7
- **Styling**: Tailwind CSS 4
- **i18n**: react-i18next
- **Deploy**: GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # 10 landing page sections
│   └── ui/            # Reusable UI components
├── locales/           # i18n translations (ko, en)
├── i18n.ts
├── App.tsx
└── main.tsx
```

## Roadmap

- [x] Phase 1: Showcase website
- [ ] Phase 2: Online multiplayer gameplay

## Game Info

| | |
|---|---|
| **Players** | 1-5 |
| **Time** | ~30 min/player |
| **Age** | 12+ |
| **Designer** | Uwe Rosenberg |
| **Publisher** | Lookout Games (2007) |

## License

This is a fan project. Agricola is a trademark of Lookout Games.

## Credits

- Game Design: Uwe Rosenberg
- Original Publisher: Lookout Games (2007)
- English Edition: Z-Man Games (2008)
