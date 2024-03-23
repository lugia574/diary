### 리액트앱 생성

npx create-react-app frontend --template typescript

### craco 설치

npm i @craco/craco --save

```json
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  }
```

### 경로 별칭 사용을 위한 플러그인 설치

npm i tsconfig-paths-webpack-plugin

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["src/**/*.test.ts", "src/**/_mocks_/*.ts"]
}
```

\+ craco.config

### 크라코가 제대로 돌아가는지 확인

- npm start

- npm run build

- serve -s build

  만약에 없다고 오류 뜨면 `npm install -g serve` 설치 ㄱㄱ

### 단위 테스트

- CI=true npm test

  는 파워셀은 못알아 먹음 그래서

  ```powershell
  $env:CI="true"
  npm test
  ```

  이렇게 해야함

### 프로덕션 환경변수

솔까 잘 모르겟음 ㅋㅋㅋ 이게 젤 중요한건데 ㅋㅋ
