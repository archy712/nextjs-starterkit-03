import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

// eslint-config-prettier는 반드시 배열 마지막에 위치해야 함
// (포맷팅은 Prettier가 전담하도록 ESLint의 스타일 관련 규칙을 끔)
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintConfigPrettier,
];

export default eslintConfig;
