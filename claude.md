# Agricola Showcase

## 프로젝트 개요

보드게임 아그리콜라(Agricola)를 소개하는 웹페이지입니다. 다음 버전에서는 온라인 플레이가 가능한 웹 애플리케이션으로 확장 예정입니다.

### 개발 단계

| 단계 | 상태 | 설명 |
|------|------|------|
| **1단계** | ✅ 완료 | 아그리콜라 소개 웹페이지 |
| **2단계** | 🔜 예정 | 온라인 플레이 웹 애플리케이션 |

---

## 기술 스택

- **프레임워크**: React 19 + TypeScript
- **빌드 도구**: Vite 7
- **스타일링**: Tailwind CSS 4
- **다국어 지원**: react-i18next (한국어/영어)
- **배포**: GitHub Pages

---

## 프로젝트 구조

```
agricola-showcase/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # 10개 랜딩 페이지 섹션
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowToPlay.tsx
│   │   │   ├── CoreActions.tsx
│   │   │   ├── Harvest.tsx
│   │   │   ├── Scoring.tsx
│   │   │   ├── Components.tsx
│   │   │   └── ComingSoon.tsx
│   │   └── ui/              # 재사용 UI 컴포넌트
│   ├── locales/             # 다국어 번역 파일
│   │   ├── ko/translation.json
│   │   └── en/translation.json
│   ├── i18n.ts              # i18n 설정
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   ├── f5-agricola-rulebook.pdf  # 원본 룰북 PDF
│   └── RULEBOOK.md               # 룰북 마크다운 버전
└── .github/workflows/
    └── deploy.yml           # GitHub Pages 자동 배포
```

---

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

---

## 배포

- **라이브 URL**: https://krindale.github.io/agricola-showcase-/
- **GitHub**: https://github.com/krindale/agricola-showcase-

main 브랜치에 푸시하면 GitHub Actions가 자동으로 배포합니다.

---

## 디자인 시스템

### 색상 팔레트

| 용도 | 색상 | 설명 |
|------|------|------|
| Primary | `#8B4513` | 갈색 (나무/흙) |
| Secondary | `#228B22` | 녹색 (목초지) |
| Accent | `#DAA520` | 금색 (곡물/수확) |
| Background | `#FDF5E6` | 오래된 종이 |
| Text | `#2F1810` | 진한 갈색 |

### 타이포그래피

- **제목**: Playfair Display (Serif)
- **본문**: Noto Sans KR (Sans-serif)

---

## 웹페이지 섹션

1. **Hero** - 타이틀, 태그라인, 게임 정보 뱃지
2. **About** - 1670년 배경 스토리
3. **Features** - 6가지 게임 특징 카드
4. **HowToPlay** - 14라운드/6단계 타임라인
5. **CoreActions** - 인터랙티브 탭 (집 확장, 가족 성장, 농사, 동물)
6. **Harvest** - 수확 3단계 흐름도
7. **Scoring** - 점수표 + 보너스 점수
8. **Components** - 구성품 갤러리
9. **ComingSoon** - 온라인 플레이 예고 + 이메일 폼
10. **Footer** - 크레딧

---

## 게임 룰북

전체 룰북은 별도 문서를 참조하세요:

📖 **[docs/RULEBOOK.md](./docs/RULEBOOK.md)** - 아그리콜라 전체 룰북 (한국어)

### 게임 기본 정보

- **플레이어 수**: 1-5명
- **플레이 시간**: 플레이어당 약 30분
- **연령**: 12세 이상
- **디자이너**: Uwe Rosenberg
- **출판사**: Lookout Games (2007)

---

## 2단계 개발 계획 (온라인 플레이)

- 1-5인 온라인 멀티플레이어
- 솔로 모드
- 실시간 대전
- 게임 상태 동기화
- 턴 타이머
