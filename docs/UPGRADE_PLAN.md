# Agricola Showcase 비주얼 업그레이드 계획

## 목표

현재 기본적인 레이아웃만 있는 페이지를 AOS Showcase 수준의 모던하고 세련된 애니메이션과 비주얼 효과로 업그레이드

**참고 사이트**: https://krindale.github.io/aos-showcase/

---

## 분석: AOS Showcase의 핵심 비주얼 요소

### 1. Framer Motion 애니메이션
- 스크롤 기반 fade-in/slide-up
- Spring physics 기반 자연스러운 움직임
- Stagger children 효과 (순차적 등장)

### 2. Glassmorphism 효과
- 반투명 배경 (backdrop-blur)
- 미묘한 보더 glow
- 레이어드 깊이감

### 3. Particle/Floating Elements
- 배경에 떠다니는 장식 요소
- 미묘한 움직임으로 생동감

### 4. Counter Animation
- 뷰포트 진입 시 숫자 카운트업
- 통계/수치에 동적 효과

### 5. 색상 테마
- 다크 테마 + 골드 액센트
- Glow 효과로 하이라이트

### 6. 타이포그래피
- Pretendard 폰트 (한글 최적화)

---

## 구현 계획

### Step 1: 의존성 추가

```bash
npm install framer-motion
```

### Step 2: 애니메이션 컴포넌트 생성

**경로: `src/components/animations/`**

| 파일 | 용도 |
|------|------|
| `FadeInWhenVisible.tsx` | 스크롤 시 fade-in 애니메이션 |
| `StaggerChildren.tsx` | 자식 요소 순차 등장 |
| `ParallaxSection.tsx` | 패럴랙스 스크롤 효과 |
| `CountUp.tsx` | 숫자 카운트업 애니메이션 |
| `FloatingParticles.tsx` | 배경 떠다니는 입자 효과 |

### Step 3: 글로벌 스타일 업그레이드

**파일: `src/index.css`**

```css
/* Glassmorphism 유틸리티 */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Glow 효과 */
.glow-gold {
  box-shadow: 0 0 20px rgba(218, 165, 32, 0.3);
}

/* 커스텀 스크롤바 */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #1a1a1a; }
::-webkit-scrollbar-thumb { background: #DAA520; border-radius: 4px; }

/* Pretendard 폰트 */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css');
```

### Step 4: 섹션별 업그레이드

#### Hero Section
- 배경에 FloatingParticles 추가
- 타이틀 글자별 순차 등장 애니메이션
- 뱃지 hover 시 glow 효과
- CTA 버튼 pulse 애니메이션

#### About Section
- 좌측 텍스트 slide-in-left
- 우측 이미지 slide-in-right
- 패럴랙스 배경 레이어

#### Features Section
- 6개 카드 stagger 등장
- 카드 hover 시 3D tilt + glow
- 아이콘 bounce 애니메이션

#### HowToPlay Section
- 타임라인 순차 등장
- 라운드 숫자 카운트업
- 단계 간 연결선 drawing 애니메이션

#### CoreActions Section
- 탭 전환 시 slide 애니메이션
- 콘텐츠 fade-in
- 아이콘 hover 효과

#### Harvest Section
- 흐름도 순차 등장
- 화살표 animated drawing
- 경고 박스 attention pulse

#### Scoring Section
- 점수표 row별 stagger
- 숫자 hover 시 scale up
- 보너스 항목 glow

#### Components Section
- 갤러리 아이템 masonry + stagger
- 이미지 hover 시 zoom + overlay
- 카테고리 필터 애니메이션

#### ComingSoon Section
- 배경 그라데이션 애니메이션
- 체크리스트 순차 체크 애니메이션
- 이메일 폼 focus 시 glow

#### Footer
- 링크 hover underline 애니메이션
- 소셜 아이콘 hover scale

### Step 5: 색상 테마 업데이트

현재 밝은 톤에서 **다크 + 골드** 테마로 전환:

| 용도 | 색상 | 설명 |
|------|------|------|
| Background | `#0a0a0a` → `#1a1a1a` | 다크 그라데이션 |
| Surface | `rgba(139, 69, 19, 0.1)` | 갈색 글래스 |
| Primary | `#DAA520` | 골드 (수확의 풍요로움) |
| Secondary | `#8B4513` | 갈색 (나무/흙) |
| Accent | `#228B22` | 녹색 (목초지) |
| Text | `#FDF5E6` | 밝은 베이지 |

---

## 수정할 파일 목록

### 신규 파일
- `src/components/animations/FadeInWhenVisible.tsx`
- `src/components/animations/StaggerChildren.tsx`
- `src/components/animations/ParallaxSection.tsx`
- `src/components/animations/CountUp.tsx`
- `src/components/animations/FloatingParticles.tsx`
- `src/components/animations/index.ts`

### 수정 파일
- `src/index.css` - 글로벌 스타일, 폰트, 유틸리티
- `src/components/sections/Hero.tsx`
- `src/components/sections/About.tsx`
- `src/components/sections/Features.tsx`
- `src/components/sections/HowToPlay.tsx`
- `src/components/sections/CoreActions.tsx`
- `src/components/sections/Harvest.tsx`
- `src/components/sections/Scoring.tsx`
- `src/components/sections/Components.tsx`
- `src/components/sections/ComingSoon.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Header.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/SectionTitle.tsx`

---

## 검증 방법

1. `npm run dev` 로 로컬 확인
2. 각 섹션 스크롤 시 애니메이션 트리거 확인
3. 호버 효과 동작 확인
4. 모바일 반응형 테스트
5. `npm run build` 성공 확인
6. GitHub Pages 배포 후 라이브 확인
