
## Book Search App
이 repository는 다음 Open Api(https://developers.daum.net/services/apis/search)를 사용하여 책 검색 애플리케이션을 만들려고 생성하였습니다.

### React
Book Search App의 view는 React를 사용하여 구현합니다.
React는 view 만드는데 있어 간결하게 만들어 줍니다.
또한 내부적으로 VIRTUAL DOM으로 구현되어 있어 변경이 필요한 최소한의 부분만 실제 DOM에 반영하기 때문에 빠르게 처리할 수 있습니다.

### Webpack
Webpack은 모듈 번들러입니다.
Webpack을 사용해 React의 JSX, Sass를 변환합니다. 또한 webpack-dev-server를 사용해 webpack 빌드를 테스트합니다.
webpack-dev-server 속도가 조금 느린 것 같아 다른 방법을 찾아보고 있습니다.

### Sass
CSS는 Sass를 사용합니다.
.sass 보다 .scss 문법의 가독성이 좋아 .scss를 선택했습니다.
CSS Preprocessor의 중첩 Nesting은 CSS 개발을 더 빠르고 쉽게 할 수 있도록 도와줍니다.
